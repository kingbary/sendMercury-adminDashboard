import React from "react";
import Container from "../universal/Container";
import { formatDateTime } from "@/utils/formatDateTime";
import DeclineTransactionModal from "./DeclineTransactionModal";
import ApproveTransactionModal from "./ApproveTransactionModal";
import { Skeleton } from "../ui/skeleton";

export default function WithdrawalTable({ transactions, isLoading }) {
  return (
    <Container className="lg:m-0 md:p-4 hidden md:block">
      <div className="hidden md:block">
        <div className="grid grid-cols-6 font-semibold w-full mb-6 pl-6 text-sm">
          <p className="text-left">SHOP NAME</p>
          <p className="whitespace-nowrap text-center">VENDOR NAME</p>
          <p className="text-center">AMOUNT</p>
          <p className="text-center">BALANCE</p>
          <p className="text-center">TIME</p>
          <p className="text-center">STATUS</p>
        </div>
        <>
          {transactions ? (
            <>
              {transactions?.length !== 0 ? (
                <>
                  {transactions.map((transaction) => {
                    return (
                      <div
                        className="mb-6 py-2 border-b border-neutral-300 w-full"
                        key={transaction?.id}
                      >
                        <div className="grid grid-cols-6 text-sm pl-6 w-full">
                          <p className="text-left">{transaction?.shopName}</p>
                          <p className="text-center">
                            {transaction?.vendorName}
                          </p>
                          <p className="text-center">
                            NGN {transaction?.amount}
                          </p>
                          <p className="text-center">
                            NGN {transaction?.balance}
                          </p>
                          <p className="text-center">
                            {formatDateTime(transaction?.createdAt)}
                          </p>
                          <p
                            className={`text-center ${
                              transaction?.status === "initiated"
                                ? "text-sleekOrange"
                                : transaction?.status === "processing"
                                ? "text-sleekOrange"
                                : transaction?.status === "successful"
                                ? "text-primaryGreen"
                                : "text-[#EB001B]"
                            } `}
                          >
                            {transaction?.status.toUpperCase().charAt(0) +
                              transaction?.status.slice(1)}
                          </p>
                        </div>
                        {transaction?.status === "initiated" ? (
                          <div className="flex mt-4 gap-2 pl-6">
                            <ApproveTransactionModal
                              transactionId={transaction?.id}
                            />
                            <DeclineTransactionModal
                              transactionId={transaction?.id}
                            />
                            {/* <Button variant="secondaryDestructive">Decline</Button> */}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="text-center">No transactions available</div>
              )}
            </>
          ) : (
            isLoading && (
              <div className="w-full">
                <Skeleton className="h-5 rounded-md mb-4" />
                <Skeleton className="h-5 rounded-md mb-4" />
                <Skeleton className="h-5 rounded-md mb-4" />
                <Skeleton className="h-5 rounded-md mb-4" />
                <Skeleton className="h-5 rounded-md mb-4" />
                <Skeleton className="h-5 rounded-md mb-4" />
              </div>
            )
          )}
        </>
      </div>
    </Container>
  );
}
