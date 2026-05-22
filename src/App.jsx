import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import Summary from "./components/summary/Summary";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Navbar />

      <main className="max-w-[1120px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-8">
            <Form />
          </div>

          <div className="lg:col-span-4">
            <Summary />
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;