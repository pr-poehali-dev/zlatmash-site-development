import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Products = () => {
  const products = [
    {
      title: "Редукторы",
      description:
        "Высокоэффективные редукторы для различных промышленных применений",
      icon: "Cog",
      features: ["Высокий КПД", "Долговечность", "Низкий уровень шума"],
    },
    {
      title: "Конвейерное оборудование",
      description:
        "Системы транспортировки для автоматизации производственных процессов",
      icon: "ArrowRight",
      features: ["Модульность", "Надежность", "Простота обслуживания"],
    },
    {
      title: "Подъемные механизмы",
      description:
        "Грузоподъемное оборудование для различных отраслей промышленности",
      icon: "ArrowUp",
      features: ["Безопасность", "Точность", "Высокая грузоподъемность"],
    },
    {
      title: "Приводные системы",
      description:
        "Комплексные приводные решения для промышленного оборудования",
      icon: "Zap",
      features: ["Энергоэффективность", "Точное управление", "Компактность"],
    },
    {
      title: "Насосное оборудование",
      description: "Центробежные и поршневые насосы для различных сред",
      icon: "Droplets",
      features: [
        "Коррозионная стойкость",
        "Высокая производительность",
        "Экономичность",
      ],
    },
    {
      title: "Компрессоры",
      description: "Поршневые и винтовые компрессоры для сжатия газов",
      icon: "Wind",
      features: ["Энергосбережение", "Низкие вибрации", "Автоматизация"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Широкий спектр промышленных механизмов и оборудования для различных
            отраслей промышленности
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon
                    name={product.icon as any}
                    size={32}
                    className="text-blue-600 group-hover:text-white transition-colors"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center space-x-2"
                    >
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Нужно индивидуальное решение?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Мы разрабатываем и производим оборудование по индивидуальным
            техническим заданиям
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            Заказать разработку
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
