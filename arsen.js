//moduller
const { LoadCommands, AoiClient } = require("aoi.js")
const { ApplicationCommandManager } = require("aoi-command-manager")
const arsen = require("./src/handler/bot.js")
const Eris = require('eris')
const { Util } = require("aoi.js")
const { setup } = require("@akarui/aoi.parser")
const { join } = require("path")
const { Database } = require("aoi.mongo");
setup(Util)

//ayarlar
const client = new AoiClient({
    token: arsen.token,
    prefix: arsen.prefix,
    intents: arsen.intents, 
    events: arsen.events,
    disableAoiDB: true,
})

//database
const database = new Database(client, {
    url: arsen.mongo,
    tables: ["main"],
    logging: true
})

//handler
client.variables(require("./src/handler/ayarlar.js"))

//komut handler
const loader = new LoadCommands(client)
loader.load(client.cmd,"./src/commands/")

const apps = new ApplicationCommandManager(client)
apps.load(join(__dirname, './src/interaction'), true).then(() => {
    setTimeout(function () {
        if (client.isReady()) {
            apps.sync()
            console.log('Developed by ArseN ❤️')
        }
    }, 5000)
})

//status
client.status({name: "Developed by ArseN ❤️", status: "dnd", type: "CUSTOM", time: 12})

//eris ses
const _client = new Eris(arsen.token, {
    intents: ["all"]
})
  
_client.connect();
_client.on("ready", () => {
_client.joinVoiceChannel(arsen.ses, {selfMute: false, selfDeaf: true})
_client.editStatus("dnd")
})