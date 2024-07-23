import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const headings = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your digital service delivered to you fastly",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure our highest quality",
  },
  {
    name: "For the planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and resotration for the natural environment",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high-quality{" "}
            <span className="text-blue-500">digital services</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to CodeHub While. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our quality promises &rarr;</Button>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          title="Brand new"
          href="/products"
          subtitle="brand description"
        />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {headings.map((ele) => {
              return (
                <div
                  key={ele.name}
                  className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className="md:flex-shrink-0 flex justify-center">
                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue100 text-blue-900 bg-blue-100 text-blue-900">
                      {<ele.Icon className="w-1/3 h-1/3" />}
                    </div>
                  </div>
                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {ele.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {ele.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
