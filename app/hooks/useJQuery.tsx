"use client";

import { useEffect, useState } from "react";
import type jQuery from "jquery";

const useJQuery = () => {
    const [jquery, setJQuery] = useState<typeof jQuery | null>(null);

    useEffect(() => {
        import("jquery").then((module) => {
            setJQuery(module.default);
        });
    }, []);

    return jquery;
};

export default useJQuery;
