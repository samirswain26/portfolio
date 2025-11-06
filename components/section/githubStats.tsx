"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Calculator, Calendar, GitBranch, GitCommit, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  username: string;
}

interface GithubStats {
  user: {
    totalcontribution: number;
  };
  contribution: {
    count: number;
    date: string;
  };
}

const GithubStats = ({ username }: Props) => {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  //   if (!stats) return null;

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
            <p className="text-sm text-muted-foreground" >Current Streak</p>
            <p className="text-xl sm:text-2xl font-bold text-primary" >{24} days</p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm "
          >
            <GitBranch className="h-4 w-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground" >Total Contributions</p>
            <p className="text-xl sm:text-2xl font-bold" >{123}</p>
          </motion.div>


          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-4 rounded-lg bg-secondary/50 backdrop-blur-sm sm:col-span-2 lg:col-span-1"
          >
            <Star className="h-4 w-4 sm:w-5 sm:h-5 text-primary mb-2" />
            <p className="text-sm text-muted-foreground" >Best Days</p>
            <p className="text-xl sm:text-2xl font-bold" >{12} commits</p>
          </motion.div>
        </div>

        <div className="space-y-4" >
            <h4 className="text-sm font-medium text-muted-foreground" >Last 30 Days</h4>
            <div className="overflow-x-auto pb-4" >
                <div className="grid grid-rows-1 grid-flow-col gap-1 min-w-[600px]" >
                    {/* Github streak will be added here */}
                </div>

            </div>
        </div>

      </motion.div>
    </div>
  );
};

export default GithubStats;
