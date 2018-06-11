var list = document.getElementById("my-ui-list");
Sortable.create(list, {
  animation: 450,
  group: "localStorage-example",
    store: {
        /**
         *
         * @param   {Sortable}  sortable
         * @returns {Array}
         */
        get: function (sortable) {
            var order = localStorage.getItem(sortable.options.group);
            return order ? order.split('|') : [];
        },

        /**
         *
         * @param {Sortable}  sortable
         */
        set: function (sortable) {
            var order = sortable.toArray();
          console.log(order);
            localStorage.setItem(sortable.options.group, order.join('|'));
        }
    }
});
