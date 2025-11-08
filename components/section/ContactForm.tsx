"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "message must be atleast 10 characters"),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function OnSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast("Message sent successfully!");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-6 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mx-3">
              <FormLabel className="mx-3">Name</FormLabel>
              <FormControl>
                <Input placeholder="Samir Kumar swain" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mx-3">
              <FormLabel className="mx-3">Email</FormLabel>
              <FormControl>
                <Input placeholder="email@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mx-3">
              <FormLabel className="mx-3">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message here..."
                  {...field}
                  className="min-h-[100px]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
