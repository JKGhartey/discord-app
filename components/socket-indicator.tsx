"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if (!isConnected) {
        return (
            <Badge
                variant="outline"
                className="bg-yellow-600 text-white border-none h-5 md:h-fit w-5 md:w-fit rounded-full"
            >
                <p className="max-md:hidden">Fallback: Polling every 1s</p>
            </Badge>
        )
    }

    return (
        <Badge
            variant="outline"
            className="bg-emerald-600 text-white border-none h-5 md:h-fit w-5 md:w-fit rounded-full "
        >
            <p className="max-md:hidden">Live: Real-time updates</p>
        </Badge>
    )
}