import React from "react";
import { formatDateTime } from "@/utils/formatDateTime";
import { PulseLoader } from "react-spinners";
import DeclineTransactionModal from "./DeclineTransactionModal";
import ApproveTransactionModal from "./ApproveTransactionModal";

export default function MobileWithdrawalTable({ transactions }) {
  return (
    <>
      {transactions ? (
        <>
          {transactions.map((transaction) => {
            return (
              <div className="p-4 md:hidden border-b border-neutral-300">
                <div className="flex justify-between">
                  <div>
                    <p
                      className={`text-xs font-semibold ${
                        transaction?.status === "initiated"
                          ? "text-sleekOrange"
                          : transaction?.status === "successful"
                          ? "text-primaryGreen"
                          : "text-[#EB001B]"
                      } `}
                    >
                      {transaction?.status.toUpperCase().charAt(0) +
                        transaction?.status.slice(1)}
                    </p>
                    <p>{transaction?.shopName}</p>
                    <p className="text-primaryBlue text-sm">
                      {transaction?.vendorName}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-midGray text-sm">
                      NGN {transaction?.balance}
                    </p>
                    <p>NGN {transaction?.amount}</p>
                    <p className="text-xs">
                      {formatDateTime(transaction?.createdAt)}
                    </p>
                  </div>
                </div>
                {transaction?.status === "initiated" ? (
                  <div className="flex mt-4 gap-2">
                    <ApproveTransactionModal transactionId={transaction?.id} />
                    <DeclineTransactionModal transactionId={transaction?.id} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </>
      ) : (
        <div className="text-center md:hidden">
          <PulseLoader color="#4d4d4d" />
        </div>
      )}
    </>
  );
}
