"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, GitBranch, GitCommit, Star } from "lucide-react";
import { motion } from "framer-motion";
import { stat } from "fs";
import { count } from "console";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  username: string;
}

interface GithubStats {
  user: {
    totalContribution: number;
  };
  contributions: {
    count: number;
    date: string;
  }[];
}

const GithubStats = ({ username }: Props) => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch(`/api/github?username=${username}`);

        if (!response.ok) {
          const text = await response.text();
          throw new Error(
            `Error fetching data: ${response.statusText} - ${text}`
          );
        }

        const data = await response.json();
        setStats(data);
      } catch (error) {
        setError("failed to fetch github stats");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubStats();
  }, [username]);

  if (loading) {
    return (
      <Card className="p-4 sm:p-6 bg-card border-border/5">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted-foreground rounded w-3/4" />
          <div className="h-8 bg-muted-foreground rounded " />
          <div className="h-32 bg-muted-foreground rounded " />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-4 sm:p-6 bg-card border-border/5">
        <div className="animate-pulse space-y-4">
          <p className="text-destructive"> {error} </p>
        </div>
      </Card>
    );
  }

  if (!stats) return null;

  const currentStreak = stats.contributions
    .slice()
    .reverse()
    .reduce((streak, day, index) => {
      if (index === 0 && day.count === 0) return 0;
      if (
        day.count > 0 &&
        (index === 0 ||
          stats.contributions.slice().reverse()[index - 1].count > 0)
      ) {
        return streak + 1;
      } else if (day.count === 0) {
        return streak; // stop counting if we hit a day with 0
      }
      return streak;
    }, 0);

    // Calculate max contribution in a day

    const maxContributions = Math.max(...stats.contributions.map(day=>day.count))

    // Calculate contribution levels per day..

    const getContributionCount = (count: number) => {
      if(count === 0) return "bg-muted"
      const percentage = (count/maxContributions) * 100

      if(percentage <= 25) return "bg-primary/30"
      if(percentage <= 50) return "bg-primary/50"
      if(percentage <= 75) return "bg-primary/70"

      return "bg-primary"
    }
  
    return (
    <div className="p-4 sm:p-6 lg:p-8 bg-card border-border/5 backdrop-blur-sm overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 sm:space-y-8"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10 ">
            <GitCommit className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold">
            Contribution Activity
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm "
          >
            <Calendar className="h-4 w-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-xl sm:text-2xl font-bold text-primary">
              {currentStreak} days
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm "
          >
            <GitBranch className="h-4 w-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Total Contributions</p>
            <p className="text-xl sm:text-2xl font-bold">{stats.user.totalContribution.toLocaleString()}</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
          >
            <Star className="h-4 w-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground">Best Days</p>
            <p className="text-xl sm:text-2xl font-bold">{maxContributions} commits</p>
          </motion.div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground">
            Last 30 Days
          </h4>
          <div className="overflow-x-auto pb-4">
            <div className="grid grid-rows-1 grid-flow-col gap-1 min-w-[600px]">
              <TooltipProvider>
                {
                  stats.contributions.slice(-30).map((day, index) => (
                    <motion.div
                    key={day.date}
                    initial={{scale:0}}
                    animate={{scale:1}}
                    transition={{delay: 0.5}}
                    >
                      <Tooltip>
                        <TooltipTrigger>
                          <div 
                          className={cn("h-6 w-6 sm:h-8 sm:w-8 rounded-sm", getContributionCount(day.count),"transition-all duration-200 hover:scale-110")}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-sx font-semibold text-black" >
                            {day.count} contributions on {
                              new Date(day.date).toLocaleDateString(
                                undefined,
                                {month:"short", day:"numeric"}
                              )
                            }
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </motion.div>
                  ))
                }
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GithubStats;
