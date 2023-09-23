import FetchingLink from "@/components/fetchinglink";

export const metadata = {
  title: "Data request",
  description: "Fetching data from server",
};

export default function FetchingLayout({ children }) {
  return <section>
    <FetchingLink />
    {children}</section>;
}
