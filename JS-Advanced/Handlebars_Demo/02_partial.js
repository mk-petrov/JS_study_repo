$(() => {
   const main = $('#main');

   let context = {
       contacts: [
           {firstName: 'Ivan', lastName: 'Ivanov', phone: '0899 999 999', email: 'iv@ivanov.com'},
           {firstName: 'Maria', lastName: 'Koleva', phone: '0899 888 999', email: 'm@koleva.com'},
           {firstName: 'Angel', lastName: 'Georgiev', phone: '0899 999 777', email: 'a@gerov.com'}
       ]
   };

   loadTemplates();

   async function loadTemplates() {
       const [contactSource, listSource] = await Promise.all([$.get('02_contact.html'), $.get('02_contactList.html')]);

       //console.log(contactSource);
       Handlebars.registerPartial('contact', contactSource);
       let listTemplate = Handlebars.compile(listSource);

       main.html(listTemplate(context));
   }
});