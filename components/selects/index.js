import cars from "../profile/carsApi.json";

export const Producer = ({ changeHandlerfn }) => {
  return (
    <select name="producer" onChange={(e) => changeHandlerfn(e)}>
      <option>აირჩიე</option>
      {cars.map((car, i) => {
        return (
          <option key={i} value={car.name}>
            {car.name}
          </option>
        );
      })}
    </select>
  );
};

export const CarModel = ({ value, changeHandlerfn, producer }) => {
  const getCarModels = () => {
    let options = [];
    if (producer) {
      cars.forEach((element, i) => {
        if (element.name === producer) {
          element[`${element.name}Options`].forEach((option, index) => {
            // console.log(option);
            options.push(
              <option
                key={index}
                selected={value == option.model_name}
                value={option.model_name}
              >
                {option.model_name}
              </option>
            );
          });
        }
      });
    }

    return options;
  };

  return (
    <select name="carModel" onChange={(e) => changeHandlerfn(e)}>
      <option>აირჩიე</option>
      {getCarModels()}
    </select>
  );
};

export const Category = ({ value, changeHandlerfn }) => {
  return (
    <select name="category" onChange={(e) => changeHandlerfn(e)}>
      <option>არჩევა</option>
      <option selected={value === "სედანი"} value="სედანი">
        სედანი
      </option>
      <option selected={value === "ჯიპი"} value="ჯიპი">
        ჯიპი
      </option>
      <option selected={value === "კუპე"} value="კუპე">
        კუპე
      </option>
      <option selected={value === "ჰეჩბექი"} value="ჰეჩბექი">
        ჰეჩბექი
      </option>
      <option selected={value === "კაბრიოლეტი"} value="კაბრიოლეტი">
        კაბრიოლეტი
      </option>
      <option selected={value === "უნივერსალი"} value="უნივერსალი">
        უნივერსალი
      </option>
      <option selected={value === "პიკაპი"} value="პიკაპი">
        პიკაპი
      </option>
      <option selected={value === "მიკროავტობუსი"} value="მიკროავტობუსი">
        მიკროავტობუსი
      </option>
      <option selected={value === "ფურგონი"} value="ფურგონი">
        ფურგონი
      </option>
      <option selected={value === "ლიმუზინი"} value="ლიმუზინი">
        ლიმუზინი
      </option>
    </select>
  );
};

export const Doors = ({ value, changeHandlerfn }) => {
  return (
    <select onChange={(e) => changeHandlerfn(e)} name="doors">
      <option>არჩევა</option>
      <option selected={value === "2"} value="2">
        2
      </option>
      <option selected={value === "4"} value="4">
        4
      </option>
      <option selected={value === ">4"} value=">4">
        >4
      </option>
    </select>
  );
};

export const Engin = ({ value, changeHandlerfn }) => {
  return (
    <select name="engin" onChange={(e) => changeHandlerfn(e)}>
      <option>აირჩიე</option>
      <option value="50">0.05</option>
      <option value="100">0.1</option>
      <option value="200">0.2</option>
      <option value="300">0.3</option>
      <option value="400">0.4</option>
      <option value="500">0.5</option>
      <option value="600">0.6</option>
      <option value="700">0.7</option>
      <option value="800">0.8</option>
      <option value="900">0.9</option>
      <option value="1000">1.0</option>
      <option value="1100">1.1</option>
      <option value="1200">1.2</option>
      <option value="1300">1.3</option>
      <option value="1400">1.4</option>
      <option value="1500">1.5</option>
      <option value="1600">1.6</option>
      <option value="1700">1.7</option>
      <option value="1800">1.8</option>
      <option value="1900">1.9</option>
      <option value="2000">2.0</option>
      <option value="2100">2.1</option>
      <option value="2200">2.2</option>
      <option value="2300">2.3</option>
      <option value="2400">2.4</option>
      <option value="2500">2.5</option>
      <option value="2600">2.6</option>
      <option value="2700">2.7</option>
      <option value="2800">2.8</option>
      <option value="2900">2.9</option>
      <option value="3000">3.0</option>
      <option value="3100">3.1</option>
      <option value="3200">3.2</option>
      <option value="3300">3.3</option>
      <option value="3400">3.4</option>
      <option value="3500">3.5</option>
      <option value="3600">3.6</option>
      <option value="3700">3.7</option>
      <option value="3800">3.8</option>
      <option value="3900">3.9</option>
      <option value="4000">4.0</option>
      <option value="4100">4.1</option>
      <option value="4200">4.2</option>
      <option value="4300">4.3</option>
      <option value="4400">4.4</option>
      <option value="4500">4.5</option>
      <option value="4600">4.6</option>
      <option value="4700">4.7</option>
      <option value="4800">4.8</option>
      <option value="4900">4.9</option>
      <option value="5000">5.0</option>
      <option value="5100">5.1</option>
      <option value="5200">5.2</option>
      <option value="5300">5.3</option>
      <option value="5400">5.4</option>
      <option value="5500">5.5</option>
      <option value="5600">5.6</option>
      <option value="5700">5.7</option>
      <option value="5800">5.8</option>
      <option value="5900">5.9</option>
      <option value="6000">6.0</option>
      <option value="6100">6.1</option>
      <option value="6200">6.2</option>
      <option value="6300">6.3</option>
      <option value="6400">6.4</option>
      <option value="6500">6.5</option>
      <option value="6600">6.6</option>
      <option value="6700">6.7</option>
      <option value="6800">6.8</option>
      <option value="6900">6.9</option>
      <option value="7000">7.0</option>
      <option value="7100">7.1</option>
      <option value="7200">7.2</option>
      <option value="7300">7.3</option>
      <option value="7400">7.4</option>
      <option value="7500">7.5</option>
      <option value="7600">7.6</option>
      <option value="7700">7.7</option>
      <option value="7800">7.8</option>
      <option value="7900">7.9</option>
      <option value="8000">8.0</option>
      <option value="8100">8.1</option>
      <option value="8200">8.2</option>
      <option value="8300">8.3</option>
      <option value="8400">8.4</option>
      <option value="8500">8.5</option>
      <option value="8600">8.6</option>
      <option value="8700">8.7</option>
      <option value="8800">8.8</option>
      <option value="8900">8.9</option>
      <option value="9000">9.0</option>
      <option value="9100">9.1</option>
      <option value="9200">9.2</option>
      <option value="9300">9.3</option>
      <option value="9400">9.4</option>
      <option value="9500">9.5</option>
      <option value="9600">9.6</option>
      <option value="9700">9.7</option>
      <option value="9800">9.8</option>
      <option value="9900">9.9</option>
      <option value="10000">10.0</option>
      <option value="10100">10.1</option>
      <option value="10200">10.2</option>
      <option value="10300">10.3</option>
      <option value="10400">10.4</option>
      <option value="10500">10.5</option>
      <option value="10600">10.6</option>
      <option value="10700">10.7</option>
      <option value="10800">10.8</option>
      <option value="10900">10.9</option>
      <option value="11000">11.0</option>
      <option value="11100">11.1</option>
      <option value="11200">11.2</option>
      <option value="11300">11.3</option>
      <option value="11400">11.4</option>
      <option value="11500">11.5</option>
      <option value="11600">11.6</option>
      <option value="11700">11.7</option>
      <option value="11800">11.8</option>
      <option value="11900">11.9</option>
      <option value="12000">12.0</option>
      <option value="12100">12.1</option>
      <option value="12200">12.2</option>
      <option value="12300">12.3</option>
      <option value="12400">12.4</option>
      <option value="12500">12.5</option>
      <option value="12600">12.6</option>
      <option value="12700">12.7</option>
      <option value="12800">12.8</option>
      <option value="12900">12.9</option>
      <option value="13000">13.0</option>
    </select>
  );
};

export const Pessengers = ({ value, changeHandlerfn }) => {
  return (
    <select name="Pessengers" onChange={(e) => changeHandlerfn(e)}>
      <option selected={value === "1"} value="1">
        1
      </option>
      <option selected={value === "2"} value="2">
        2
      </option>
      <option selected={value === "3"} value="3">
        3
      </option>
      <option selected={value === "4"} value="4">
        4
      </option>
      <option selected={value === "5"} value="5">
        5
      </option>
      <option selected={value === "6"} value="6">
        6
      </option>
      <option selected={value === "7"} value="7">
        7
      </option>
      <option selected={value === "8"} value="8">
        8
      </option>
      <option selected={value === "9"} value="9">
        9
      </option>
      <option selected={value === ">9"} value=">9">
        >9
      </option>
    </select>
  );
};

export const OilType = ({ value, changeHandlerfn }) => {
  return (
    <select name="oilType" onChange={(e) => changeHandlerfn(e)}>
      <option selected={value === "ბენზინი"} value="ბენზინი">
        ბენზინი
      </option>
      <option selected={value === "დიზელი"} value="დიზელი">
        დიზელი
      </option>
      <option selected={value === "ელექტრო"} value="ელექტრო">
        ელექტრო
      </option>
      <option selected={value === "წყალბადი"} value="წყალბადი">
        წყალბადი
      </option>
      <option selected={value === "ჰიბრიდი"} value="ჰიბრიდი">
        ჰიბრიდი
      </option>
      <option
        selected={value === "დატენვადი ჰიბრიდი"}
        value="დატენვადი ჰიბრიდი"
      >
        დატენვადი ჰიბრიდი
      </option>
      <option selected={value === "ბუნებრივი ჰიბრიდი"} value="ბუნებრივი აირი">
        ბუნებრივი აირი
      </option>
      <option selected={value === "თხევადი გაზი"} value="თხევადი გაზი">
        თხევადი გაზი
      </option>
    </select>
  );
};

export const Location = ({ value, changeHandlerfn }) => {
  return (
    <select name="location" onChange={(e) => changeHandlerfn(e)}>
      <option>აირჩიე</option>
      <option selected={value === "თბილისი"} value=" თბილისი">
        თბილისი
      </option>
      <option selected={value === "ქუთაისი"} value=" ქუთაისი">
        ქუთაისი
      </option>
      <option selected={value === "ბათუმი"} value=" ბათუმი">
        ბათუმი
      </option>
      <option selected={value === "ფოთი"} value=" ფოთი">
        ფოთი
      </option>
      <option selected={value === "რუსთავი"} value=" რუსთავი">
        რუსთავი
      </option>
      <option selected={value === "ჩხოროწყუ"} value=" ჩხოროწყუ">
        ჩხოროწყუ
      </option>
      <option selected={value === "ჭიათურა"} value=" ჭიათურა">
        ჭიათურა
      </option>
      <option selected={value === "მარტვილი"} value=" მარტვილი">
        მარტვილი
      </option>
      <option selected={value === "გურჯაანი"} value=" გურჯაანი">
        გურჯაანი
      </option>
      <option selected={value === "საგარეჯო"} value=" საგარეჯო">
        საგარეჯო
      </option>
      <option selected={value === "კასპი"} value=" კასპი">
        კასპი
      </option>
      <option selected={value === "ბორჯომი"} value=" ბორჯომი">
        ბორჯომი
      </option>
      <option selected={value === "დუშეთი"} value=" დუშეთი">
        დუშეთი
      </option>
      <option selected={value === "ახმეტა"} value=" ახმეტა">
        ახმეტა
      </option>
      <option selected={value === "ზესტაფონი"} value=" ზესტაფონი">
        ზესტაფონი
      </option>
      <option selected={value === "ლაგოდეხი"} value=" ლაგოდეხი">
        ლაგოდეხი
      </option>
      <option selected={value === "ახალციხე"} value=" ახალციხე">
        ახალციხე
      </option>
      <option selected={value === "ქობულეთი"} value=" ქობულეთი">
        ქობულეთი
      </option>
      <option selected={value === "სოხუმი"} value=" სოხუმი">
        სოხუმი
      </option>
      <option selected={value === "ცხინვალი"} value=" ცხინვალი">
        ცხინვალი
      </option>
      <option selected={value === "თელავი"} value=" თელავი">
        თელავი
      </option>
      <option selected={value === "ზუგდიდი"} value=" ზუგდიდი">
        ზუგდიდი
      </option>
      <option selected={value === "ოზურგეთი"} value=" ოზურგეთი">
        ოზურგეთი
      </option>
      <option selected={value === "ამბროლაური"} value=" ამბროლაური">
        ამბროლაური
      </option>
      <option selected={value === "მცხეთა"} value=" მცხეთა">
        მცხეთა
      </option>
      <option selected={value === "ახალქალაქი"} value=" ახალქალაქი">
        ახალქალაქი
      </option>
      <option selected={value === "გორი"} value=" გორი">
        გორი
      </option>
      <option selected={value === "ხაშური"} value=" ხაშური">
        ხაშური
      </option>
      <option selected={value === "სენაკი"} value=" სენაკი">
        სენაკი
      </option>
      <option selected={value === "სიღნაღი"} value=" სიღნაღი">
        სიღნაღი
      </option>
      <option selected={value === "ქარელი"} value=" ქარელი">
        ქარელი
      </option>
      <option selected={value === "მარნეული"} value=" მარნეული">
        მარნეული
      </option>
      <option selected={value === "გარდაბანი"} value=" გარდაბანი">
        გარდაბანი
      </option>
      <option selected={value === "სამტრედია"} value=" სამტრედია">
        სამტრედია
      </option>
      <option selected={value === "მესტია"} value=" მესტია">
        მესტია
      </option>
      <option selected={value === "საჩხერე"} value=" საჩხერე">
        საჩხერე
      </option>
      <option selected={value === "ხობი"} value=" ხობი">
        ხობი
      </option>
      <option selected={value === "თიანეთი"} value=" თიანეთი">
        თიანეთი
      </option>
      <option selected={value === "ყვარელი"} value=" ყვარელი">
        ყვარელი
      </option>
      <option selected={value === "ტყიბული"} value=" ტყიბული">
        ტყიბული
      </option>
      <option selected={value === "დედოფლისწყარო"} value=" დედოფლისწყარო">
        დედოფლისწყარო
      </option>
      <option selected={value === "ონი"} value=" ონი">
        ონი
      </option>
      <option selected={value === "ბოლნისი"} value=" ბოლნისი">
        ბოლნისი
      </option>
      <option selected={value === "წყალტუბო"} value=" წყალტუბო">
        წყალტუბო
      </option>
      <option selected={value === "თეთრიწყარო"} value=" თეთრიწყარო">
        თეთრიწყარო
      </option>
      <option selected={value === "თიანეთი"} value=" თიანეთი">
        თიანეთი
      </option>
      <option selected={value === "ჟინვალი"} value=" ჟინვალი">
        ჟინვალი
      </option>
    </select>
  );
};
