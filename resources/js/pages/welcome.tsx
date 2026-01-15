import Navbar from '@/components/navbar';

export default function Welcome() {
    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        </div>
    );
}