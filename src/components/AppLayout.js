import Link from "next/link";

const AppLayout = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h2>HOME</h2>
        </a>
      </Link>
      <Link href="/conuter">
        <a>
          <h2>to counter</h2>
        </a>
      </Link>
      <Link href="/calc">
        <a>
          <h2>to Calc</h2>
        </a>
      </Link>
      <Link href="/bmi">
        <a>
          <h2>to bmi</h2>
        </a>
      </Link>
    </>
  );
};

export default AppLayout;