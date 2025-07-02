import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600">
            Свяжитесь с нами для получения консультации и размещения заказа
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Icon
                    name="Phone"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Телефон
                  </h3>
                  <p className="text-gray-600">+7 (351) 123-45-67</p>
                  <p className="text-gray-600">+7 (351) 123-45-68</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Icon
                    name="Mail"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Email
                  </h3>
                  <p className="text-gray-600">info@zlatmash.ru</p>
                  <p className="text-gray-600">sales@zlatmash.ru</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Icon
                    name="MapPin"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Адрес
                  </h3>
                  <p className="text-gray-600">г. Златоуст</p>
                  <p className="text-gray-600">ул. Промышленная, 15</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <Icon
                    name="Clock"
                    size={48}
                    className="text-blue-600 mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2 text-gray-900">
                    Режим работы
                  </h3>
                  <p className="text-gray-600">Пн-Пт: 8:00-17:00</p>
                  <p className="text-gray-600">Сб-Вс: выходной</p>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-gray-900">
                  Отделы компании
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Briefcase" size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Отдел продаж
                    </div>
                    <div className="text-gray-600">доб. 101</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Wrench" size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Техническая поддержка
                    </div>
                    <div className="text-gray-600">доб. 102</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Проектный отдел
                    </div>
                    <div className="text-gray-600">доб. 103</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" size={20} className="text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Логистика</div>
                    <div className="text-gray-600">доб. 104</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="p-8 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900 mb-6">
                  Свяжитесь с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Опишите ваш запрос или задайте вопрос..."
                  ></textarea>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Отправить сообщение
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * Обязательные для заполнения поля
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">АО ЗЛАТМАШ</h3>
            <p className="text-lg mb-4">
              Надежный партнер в области промышленных механизмов
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div>ИНН: 7414567890</div>
              <div>КПП: 741401001</div>
              <div>ОГРН: 1027414567890</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
