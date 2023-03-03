angular.module("app", []);

angular.module("app").controller("CategoryController", function () {
  var vm = this;
  vm.title = "Category Page";

  vm.products = [
    {
      name: "Product A",
      description: "Description for Product A",
      price: 100,
      contacted: 10,
      favorite: true,
    },
    {
      name: "Product B",
      description: "Description for Product B",
      price: 200,
      contacted: 5,
      favorite: false,
    },
    {
      name: "Product C",
      description: "Description for Product C",
      price: 150,
      contacted: 15,
      favorite: true,
    },
    {
      name: "Product D",
      description: "Description for Product D",
      price: 300,
      contacted: 20,
      favorite: false,
    },
  ];

  vm.orders = [
    {
      id: 1,
      title: "Default",
      key: "name",
      reverse: false,
    },
    {
      id: 2,
      title: "Contacted",
      key: "contacted",
      reverse: true,
    },
    {
      id: 3,
      title: "Favorite",
      key: "favorite",
      reverse: true,
    },
  ];

  vm.order = vm.orders[0];
});
