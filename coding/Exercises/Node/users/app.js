const yargs = require("yargs");
const notes = require("./request");

yargs.command({
    command: "add",
    describe: "add a new user",
    builder: {
        email: {
            describe: "User Email",
            demandOption: true,
            type: "string",
        },
        name: {
            describe: "User Name",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.addNote(argv.email, argv.name);
    },
});

yargs.command({
    command: "remove",
    describe: "remove a User",
    builder: {
        email: {
            describe: "User Name",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.removeNote(argv.email);
    },
});

yargs.command({
    command: "list",
    describe: "Users List",
    handler() {
        notes.notes();
    },
});

yargs.command({
    command: "read",
    describe: "read the note",
    builder: {
        email: {
            describe: "User Name",
            demandOption: true,
            type: "string",
        },
    },
    handler(argv) {
        notes.specificNote(argv.email);
    },
});

yargs.command({
    command: "update",
    describe: "update the note",
    builder: {
        email: {
            describe: "User Email",
            demandOption: true,
            type: "string",
        },
        newEmail: {
            describe: "User Name",
            demandOption: false,
            type: "string",
        },
        newName: {
            describe: "User Name",
            demandOption: false,
            type: "string",
        },
    },
    handler(argv) {
        notes.update(argv.email, argv.newEmail, argv.newName);
    },
});

yargs.parse();
