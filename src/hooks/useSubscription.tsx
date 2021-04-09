import { useContext } from "react";
import { SubscriptionContext, SubscriptionContextData } from '../contexts/SubscriptionContext';

export const useSubscription = (): SubscriptionContextData => useContext(SubscriptionContext);