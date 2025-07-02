import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              АО ЗЛАТМАШ
              <span className="block text-blue-400 text-4xl mt-2">
                Промышленные механизмы
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ведущий производитель высокотехнологичных промышленных механизмов
              и оборудования для различных отраслей промышленности
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                Наша продукция
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
              >
                О компании
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-700 rounded-lg p-8 border border-gray-600">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Icon
                    name="Factory"
                    size={48}
                    className="text-blue-400 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">25+</h3>
                  <p className="text-gray-300">лет опыта</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Users"
                    size={48}
                    className="text-blue-400 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-gray-300">клиентов</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Award"
                    size={48}
                    className="text-blue-400 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">ISO</h3>
                  <p className="text-gray-300">сертификат</p>
                </div>
                <div className="text-center">
                  <Icon
                    name="Globe"
                    size={48}
                    className="text-blue-400 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">15</h3>
                  <p className="text-gray-300">стран</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
