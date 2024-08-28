module.exports = [{
    name: "bot",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionmodal[Bot Kod Testi;eval;
        {actionRow:{textInput:Kod Bloğu:2:kod}}]
	$onlyforids[$clientownerids;❎ <@$authorid>, Bu komut sadece Geliştiricime'e özeldir.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==test;]
`},{
    name: "eval",
    type: "interaction",
    prototype: "modal",
    code: `
    $interactionreply[✅ Komut başarıyla çalıştırıldı.;everyone;true]
    $eval[$textinputvalue[kod]]
`},{
    name: "bot",
    type: "interaction",
    prototype: "slash",
    code: `
    $reboot[arsen.js]
    $wait[1s]
    $interactionreply[$getvar[tick] Bot başarıyla resetlendi.everyone;true]
    $onlyforids[$clientownerids;❎ <@$authorid>, Bu komut sadece Geliştiricime'e özeldir.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==reset;]
`}]
