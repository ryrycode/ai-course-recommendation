export default function AdminStatCard({
    title,
    value,
    icon,
}) {
    return (

        <div className="bg-white rounded-xl shadow p-6">

            <div className="text-3xl">
                {icon}
            </div>

            <p className="text-gray-500 mt-4">
                {title}
            </p>

            <h2 className="text-4xl font-bold text-green-700 mt-2">
                {value}
            </h2>

        </div>

    );
}