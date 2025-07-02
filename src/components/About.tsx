import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">О компании</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            АО ЗЛАТМАШ — надежный партнер в области производства промышленных
            механизмов с многолетним опытом и безупречной репутацией
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <Icon
                name="Target"
                size={64}
                className="text-blue-600 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Качество
              </h3>
              <p className="text-gray-600">
                Высочайшие стандарты качества производства и контроля на всех
                этапах изготовления продукции
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <Icon
                name="Lightbulb"
                size={64}
                className="text-blue-600 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Инновации
              </h3>
              <p className="text-gray-600">
                Постоянное внедрение современных технологий и разработка
                инновационных решений
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <Icon
                name="Shield"
                size={64}
                className="text-blue-600 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Надежность
              </h3>
              <p className="text-gray-600">
                Долговечность и безотказность нашего оборудования подтверждена
                многолетним опытом эксплуатации
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Наша миссия
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Мы стремимся быть лидером в производстве промышленных
                механизмов, обеспечивая наших клиентов надежным и
                высокотехнологичным оборудованием.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">
                    Собственное производство полного цикла
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">
                    Квалифицированный персонал
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-600"
                  />
                  <span className="text-gray-700">
                    Современное оборудование
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    1998
                  </div>
                  <div className="text-gray-600">год основания</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    300+
                  </div>
                  <div className="text-gray-600">сотрудников</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">видов продукции</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    99%
                  </div>
                  <div className="text-gray-600">качество</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
