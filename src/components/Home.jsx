import React from "react";
import Card from "./Card";
import { formatDistanceToNowStrict } from "date-fns";

const Home = () => {
    const names = [
        "Audrey Blair",
        "Alisha Blackburn",
        "Tabitha Weber",
        "Lily Ward",
        "Mario Charles",
        "Omari Daniel",
        "Faith Hood",
        "Ashlyn Barber",
        "Uriah Ray",
        "Josephine Cherry",
        "Regina Sherman",
        "Patricia Robinson",
        "Judith Wiggins",
        "Tobias Adkins",
        "Alejandra Robbins",
        "Darnell Donaldson",
        "Raphael Clay",
        "Joy Mann",
        "Savannah Clayton",
        "Noah Warren",
        "Antonio Parrish",
        "Mohammed Avery",
        "Nola Garner",
        "Sidney Melendez",
    ];
    const dates = [
        new Date(2014, 5, 2),
        new Date(2014, 11, 28),
        new Date(2015, 2, 17),
        new Date(2015, 4, 7),
        new Date(2015, 4, 28),
        new Date(2015, 7, 4),
        new Date(2015, 8, 20),
        new Date(2015, 11, 9),
        new Date(2016, 9, 10),
        new Date(2016, 10, 30),
        new Date(2017, 4, 28),
        new Date(2017, 6, 27),
        new Date(2017, 8, 5),
        new Date(2018, 3, 18),
        new Date(2018, 4, 5),
        new Date(2018, 7, 28),
        new Date(2018, 11, 17),
        new Date(2018, 11, 19),
        new Date(2019, 3, 7),
        new Date(2019, 9, 11),
        new Date(2020, 1, 3),
        new Date(2020, 6, 8),
        new Date(2020, 6, 28),
        new Date(2020, 11, 13),
        new Date(2021, 1, 22),
        new Date(2014 - 9 - 17),
        new Date(2014, 10, 16),
        new Date(2015, 1, 29),
        new Date(2015, 6, 13),
        new Date(2015, 6, 26),
        new Date(2015, 11, 14),
        new Date(2015, 12, 9),
        new Date(2015, 12, 14),
        new Date(2016, 1, 9),
        new Date(2016, 9, 8),
        new Date(2016, 9, 26),
        new Date(2017, 3, 1),
        new Date(2017, 6, 26),
        new Date(2017, 12, 29),
        new Date(2018, 2, 21),
        new Date(2018, 5, 4),
        new Date(2018, 7, 5),
        new Date(2018, 12, 11),
        new Date(2019, 1, 1),
        new Date(2019, 10, 8),
        new Date(2019, 11, 6),
        new Date(2019, 11, 7),
        new Date(2021, 6, 24),
        new Date(2022, 2, 22),
        new Date(2022, 3, 22),
    ];
    const arr = Array(60).fill("hehe");
    return (
        <main className="min-h-screen bg-bg grid gap-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-5">
            {arr.map((a, i) => (
                <Card
                    key={i}
                    thumbnailUrl={`https://picsum.photos/300/200?random=${Math.floor(
                        Math.random() * 1000
                    )}`}
                    title={`${names[Math.floor(Math.random() * names.length)]}${
                        Math.floor(Math.random() * 10) % 3 === 0
                            ? " IN DANGER! YOU WON'T BELIEVE IT! SHOCKING NEWS! CAN'T MISS IT!!"
                            : Math.floor(Math.random() * 10) % 3 === 1
                            ? "'s SECRET! MUST WATCH!!"
                            : "'s newest"
                    }`}
                    creator={{
                        name: names[Math.floor(Math.random() * names.length)],
                        verified: Math.floor(Math.random() * 10) % 2,
                    }}
                    views={Math.floor(Math.random() * 1500000)}
                    uploadedAt={`${formatDistanceToNowStrict(
                        dates[Math.floor(Math.random() * dates.length)]
                    )} ago`}
                />
            ))}
        </main>
    );
};

export default Home;
