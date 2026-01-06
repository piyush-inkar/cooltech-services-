import React, { useEffect, useState } from "react";
import { ServiceCard } from "../ServiceCard"; // your motion card
import { Wrench, Car, Fan } from "lucide-react";

type Maintenance = {
    id: number;
    name: string;
    description: string;
    price: string;
    star: number;
};

export default function MaintenanceList() {
    const [services, setServices] = useState<Maintenance[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/get-maintainence/");
                if (!res.ok) throw new Error("Failed to fetch services");

                const data = await res.json();
                setServices(data.data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchServices();
    }, []);

    if (loading) return <p className="p-6">Loading services...</p>;
    if (error) return <p className="p-6 text-red-500">Error: {error}</p>;

    const icons = [Wrench, Car, Fan]; // cycle icons for demo

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

            {services.map((service, index) => (
                <ServiceCard
                    key={service.id}
                    icon={icons[index % icons.length]}
                    name={service.name}
                    price={`$${service.price}`}
                    description={service.description}
                />
            ))}
        </div>

    );
}
