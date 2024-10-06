import { jetbrains } from "@/fonts";
import clsx from "clsx";

import React from "react";

type reasonProps = {
    reason: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
};
function Reason({ reason, onChange }: reasonProps) {
    return (
        <div className="mb-4">
            <label
                className={clsx(
                    jetbrains.className,
                    "block text-white text-sm font-bold mb-2"
                )}
                htmlFor="reason"
            >
                Reason
            </label>
            <select
                id="reason"
                value={reason}
                onChange={onChange}
                className="w-full px-3 py-2 outline-none border border-transparent text-white bg-black transition-all duration-150 border-gray-300 rounded-md"
                required
            >
                <option value="">Select a reason</option>
                <option value="Portfolio Feedback ">Portfolio Feedback </option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Other">Other</option>
            </select>
        </div>
    );
}

export default Reason;
