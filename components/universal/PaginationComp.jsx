import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function PaginationComp({
  previousPage,
  page,
  totalPages,
  nextPage,
  nextHref,
  prevHref,
  linkHref,
}) {
  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          {previousPage ? (
            <PaginationPrevious
              href={prevHref}
              prevBtnClassName="size-9 rounded-full bg-primaryBlue"
            />
          ) : (
            <>
              <button
                className="flex items-center justify-center size-9 rounded-full bg-lightGray mr-4"
                disabled
              >
                <ArrowLeft className="shrink-0 size-4" color="#525252" />
              </button>
            </>
          )}
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) =>
          Number(page) === index + 1 || (!page && index === 0) ? (
            <button
              key={index}
              className={`border-[1.5px]  rounded-md bg-white text-primaryBlue border-primaryBlue size-10`}
            >
              {index + 1}
            </button>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink
                href={linkHref(index)}
                className={`border-[1.5px] size-9 rounded-md "bg-lightGray border-lightGray text-darkGray"
                `}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          {nextPage ? (
            <PaginationNext
              href={`${nextHref}`}
              nextBtnClassName="size-9 rounded-full bg-primaryBlue"
            />
          ) : (
            <>
              <button
                className="flex items-center justify-center size-9 rounded-full bg-lightGray ml-4"
                disabled
              >
                <ArrowRight className="shrink-0 size-4" color="#525252" />
              </button>
            </>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
