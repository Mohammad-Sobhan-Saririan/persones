const city = [
    { id: 1, city: "Mashhad" },
    { id: 2, city: "Tehran" },
    { id: 3, city: "Shiraz" },
    { id: 4, city: "Isfahan" },
    { id: 5, city: "Tabriz" },
];

export function getCity() {
    return city.filter((p) => p);
}
