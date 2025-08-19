// components/ui/tabs.tsx

import * as React from "react"
import {
  Root as Tabs,
  List as TabsListPrimitive,
  Trigger as TabsTriggerPrimitive,
  Content as TabsContent,
} from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

// Styled TabsList
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsListPrimitive>,
  React.ComponentPropsWithoutRef<typeof TabsListPrimitive>
>(({ className, ...props }, ref) => (
  <TabsListPrimitive
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsListPrimitive.displayName

// Styled TabsTrigger
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsTriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>
>(({ className, ...props }, ref) => (
  <TabsTriggerPrimitive
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsTriggerPrimitive.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }

