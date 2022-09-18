const contacts = require("./contacts");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");


const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const list = await contacts.listContacts();
            console.log(list);
            break;

        case "get":
            const get = await contacts.getContactById(id);
            console.log(get);
            break;

        case "add":
            const add = await contacts.addContact({ name, email, phone });
            console.log(add);
            break;

        case "remove":
            const remove = await contacts.removeContact(id);
            console.log(remove);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

const arr = hideBin(process.argv);

const { argv } = yargs(arr);
invokeAction(argv);