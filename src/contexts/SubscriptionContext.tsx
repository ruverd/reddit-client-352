import { createContext, ReactNode, useState } from "react";

interface SubscriptionProviderProps {
  children: ReactNode;
}

export interface SubscriptionContextData {
  plan: string;
  setPlan(plan: string): void;
}

export const SubscriptionContext = createContext({} as SubscriptionContextData);

export function SubscriptionProvider({children}: SubscriptionProviderProps) {
  const [plan, setPlan] = useState<string>('Basic');

  return (
    <SubscriptionContext.Provider value={{plan, setPlan}} >
      {children}
    </SubscriptionContext.Provider>
  )
}
