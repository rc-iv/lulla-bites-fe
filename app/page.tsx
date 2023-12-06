"use client";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 p-4 text-thistle-800 dark:text-jetstream-400">
      <section className="text-center mt-8">
        <div className="lg:flex">
          <div className="lg:px-4">
            <h1 className="text-4xl font-bold mb-4 ">Welcome to Lullabites</h1>
            <p className="text-lg mb-6">
              Your trusted companion for tracking your babys sleep and eating
              habits. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dolorum, voluptate obcaecati veniam libero facere eveniet
              inventore fugit ut excepturi. Itaque animi impedit rem nisi
              explicabo quo, nesciunt error quaerat consequuntur!
            </p>
          </div>
          <Image
            alt="Graphic showing a soothing and calm baby sleep environment"
            src="/images/environment.png"
            width={7000}
            height={4000}
            className="w-full max-w-md mx-auto rounded-lg"
          />
        </div>
      </section>

      <section className="mt-12 mb-8 px-4 text-center">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="lg:px-4">
            <h2 className="text-3xl font-bold mb-4">Easy Tracking</h2>
            <p className="text-lg mb-6">
              Log and monitor sleeping patterns and feeding times with ease.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              pariatur deserunt nihil ex dolores excepturi facere eius dolorum
              qui, consectetur numquam, laboriosam doloribus incidunt voluptas
              quam? Quo repellendus repellat rem. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ipsa, magni consequuntur sapiente
              totam beatae dignissimos vitae ex excepturi assumenda voluptas
              dolorem! Ratione sint tenetur rem amet atque, neque maxime
              pariatur?
            </p>
          </div>
          <Image
            alt="Illustration of a simple and intuitive tracking interface"
            className="w-full max-w-md mx-auto rounded-lg"
            src="/images/interface.png"
            width={4000}
            height={4000}
          />
        </div>
      </section>

      <section className="mb-12 px-4 text-center">
        <div className="lg:flex">
          <div className="lg:px-4">
            <h2 className="text-3xl font-bold mb-4">Insights and Analytics</h2>
            <p className="text-lg mb-6">
              Gain insights into your babys habits with detailed analytics and
              reports. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore amet quos voluptatem asperiores repellat placeat, veritatis, nisi labore quae numquam temporibus dolorem, et quasi quo minus animi. Itaque fugiat nihil molestias non. At ad iure ex fugit quod, repudiandae voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. In asperiores assumenda cupiditate! Nam perferendis reiciendis omnis, nostrum consequuntur distinctio in corrupti voluptates officiis ex numquam doloremque aperiam fugit vel alias iure sapiente velit. Tenetur soluta blanditiis iusto, porro quis voluptatibus?
            </p>
          </div>
          <Image
            alt="Chart graphic showcasing baby's sleep and feeding analytics"
            className="w-full max-w-md mx-auto rounded-lg"
            src="/images/analytics.png"
            width={4000}
            height={4000}
          />
        </div>
      </section>
    </main>
  );
}
