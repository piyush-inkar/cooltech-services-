// import React, { useEffect, useState } from "react";
// // import { ServiceCard } from "./ServiceCard";
// import { Wrench } from "lucide-react";

// type Maintenance = {
//     id: number;
//     name: string;
//     description: string;
//     price: string;
//     star: number;
// };

// export default function ServicesPage() {
//     const [services, setServices] = useState<Maintenance[]>([]);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/api/maintenance/")
//             .then((res) => res.json())
//             .then((data) => setServices(data.data)) // your API returns { data: [...] }
//             .catch((err) => console.error(err));
//     }, []);

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//             {services.map((s) => (
//                 <ServiceCard
//                     key={s.id}
//                     icon={Wrench} // you can later map icons dynamically
//                     name={s.name}
//                     price={`$${s.price}`}
//                     description={s.description}
//                 />
//             ))}
//         </div>
//     );
// }
