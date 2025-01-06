"use client";

import { Accordion } from "flowbite-react";

export function AccordionSection() {
  // Khai báo nội dung của Accordion
  const accitem = [
    {
      title: "Do you offer vegetarian or vegan options?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, we offer both vegetarian and vegan options to cater to a variety of dietary preferences. Our menu includes a range of plant-based dishes made with fresh, high-quality ingredients. If you have specific dietary needs or restrictions, feel free to let us know, and we'll be happy to accommodate your request!
          </p>
        </>
      ),
    },
    {
      title: "Is there a dress code?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            At our restaurant, we aim to create a welcoming and comfortable atmosphere for all our guests. While we do not enforce a strict dress code, we recommend smart casual attire to ensure a pleasant dining experience for everyone. Feel free to dress in a way that makes you feel relaxed and enjoy your time with us!
          </p>
        </>
      ),
    },
    {
      title: "Can I make a reservation?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, you can! Book online or call us at +84 26412 12310. Walk-ins are welcome, but reservations are recommended during busy hours.
          </p>
        </>
      ),
    },
    {
      title: "Do you have a loyalty or rewards program?",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, we do! Our loyalty program lets you earn points every time you dine with us, which can be redeemed for discounts, free items, and exclusive perks. Signing up is easy—just ask our staff during your visit or visit our website to join. We love rewarding our regular guests!            </p>
        </>
      ),
    },
    {
      title: "Do you offer catering services for events",
      content: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Yes, we offer catering services for all types of events, from intimate gatherings to large celebrations. Our team can create a customized menu to suit your needs and ensure your guests enjoy a memorable dining experience. <a href="#" className="font-bold underline">Contact us</a> for more details or to discuss your event requirements!
          </p>
        </>
      ),
    },
  ];

  // Render map()
  return (
    <div>
      <div className="bg-neutral-100 justify-center">
        <h4 className="justify-center text-center text-neutral-500 text-4xl font-sacramento">Everything You Need to Know</h4>
        <h3 className="justify-center text-center text-yellow-400 text-5xl font-bold pb-7">FAQs</h3>
      </div>
      <div className="flex justify-center items-center bg-neutral-100">
      <Accordion className=" w-full max-w-2xl items-center bg-white">
        {accitem.map((item, index) => (
          <Accordion.Panel key={index}>
            <Accordion.Title>{item.title}</Accordion.Title>
            <Accordion.Content>
              {item.content}
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
      </div>
    </div>
  );
}
