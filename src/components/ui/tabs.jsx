import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext({ activeTab: "", setActiveTab: () => {} })

const Tabs = ({ defaultValue, value, onValueChange, className, children, ...props }) => {
  const [selected, setSelected] = React.useState(value || defaultValue || "")
  const activeTab = value !== undefined ? value : selected

  const handleTabChange = (val) => {
    setSelected(val)
    if (onValueChange) onValueChange(val)
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-11 items-center border border-[#E2DFD7] bg-[#F7F6F3] p-0 text-[#77736F]",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({ className, value, ...props }, ref) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext)
  const isActive = activeTab === value

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setActiveTab(value)}
      className={cn(
        "inline-flex h-full items-center justify-center whitespace-nowrap px-6 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all cursor-pointer border-r border-[#E2DFD7] last:border-r-0",
        isActive
          ? "bg-[#4A152E] text-[#F7F6F3]"
          : "bg-transparent text-[#202020] hover:bg-[#EFECE6]",
        className
      )}
      {...props}
    />
  )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({ className, value, children, ...props }, ref) => {
  const { activeTab } = React.useContext(TabsContext)
  if (activeTab !== value) return null

  return (
    <div
      ref={ref}
      className={cn("mt-4 p-6 border border-[#E2DFD7] bg-[#F7F6F3]", className)}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
