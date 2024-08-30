import ActiveLabel from "@/app/components/active-lable";
import NotActiveLabel from "@/app/components/not-active-lable";

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
        <ActiveLabel>Active</ActiveLabel>
        <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
