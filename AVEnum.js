function AVEnum () {
ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.bindFunction('CFMakeCollectable', ['id', ['void *'] ]);
var currentApp = Application.currentApplication();
currentApp.includeStandardAdditions = true;
var fileMan = $.NSFileManager.defaultManager;
var results = "";

//-----------SecCheck-----------------
var runapps = $.NSWorkspace.sharedWorkspace.runningApplications.js;
var applist = [];
for(let i = 0; i < runapps.length; i++){
	let info = {};
	info['name'] = runapps[i].localizedName.js;
	applist.push(info['name']);
	
}

var allapps = applist.toString();
var b = 0;
results += "#######################################\n";
results += "=====>Security Tools Check:\n";
if ((allapps.includes("CbOsxSensorService")) || (fileMan.fileExistsAtPath("/Applications/CarbonBlack/CbOsxSensorService"))){
	results += "[+] Carbon Black Sensor installed.\n";
	b = 1;
}

if ((allapps.includes("CbDefense")) || (fileMan.fileExistsAtPath("/Applications/Confer.app"))){
        results += "[+] CB Defense A/V installed.\n";
        b = 1;
}

if ((allapps.includes("ESET")) || (allapps.includes("eset")) || (fileMan.fileExistsAtPath("Library/Application Support/com.eset.remoteadministrator.agent"))){
        results += "[+] ESET A/V installed.\n";
        b = 1;
}

if ((allapps.includes("Littlesnitch")) || (allapps.includes("Snitch")) || (fileMan.fileExistsAtPath("/Library/Little Snitch/"))){
        results += "[+] Littlesnitch firewall found.\n";
        b = 1;
}

if ((allapps.includes("xagt")) || (fileMan.fileExistsAtPath("/Library/FireEye/xagt"))){
        results += "[+] FireEye HX agent found.\n";
        b = 1;
}

if ((allapps.includes("falconctl")) || (fileMan.fileExistsAtPath("/Library/CS/falcond"))){
        results += "[+] Crowdstrike Falcon agent found.\n";
        b = 1;
}

if ((allapps.includes("OpenDNS")) || (allapps.includes("opendns")) || (fileMan.fileExistsAtPath("/Library/Application Support/OpenDNS Roaming Client/dns-updater"))){
        results += "[+] OpenDNS client found.\n";
        b = 1;
}

if ((allapps.includes("SentinelOne")) || (allapps.includes("sentinelone"))){
        results += "[+] Sentinel One agent found.\n";
        b = 1;
}

if ((allapps.includes("GlobalProtect")) || (allapps.includes("PanGPS")) || (fileMan.fileExistsAtPath("/Library/Logs/PaloAltoNetworks/GlobalProtect")) || (fileMan.fileExistsAtPath("/Library/PaloAltoNetworks"))){
        results += "[+] Global Protect PAN VPN client found.\n";
        b = 1;
}

if ((allapps.includes("HostChecker")) || (allapps.includes("pulsesecure")) || (fileMan.fileExistsAtPath("/Applications/Pulse Secure.app")) || (allapps.includes("Pulse-Secure"))){
        results += "[+] Pulse VPN client found.\n";
        b = 1;
}

if ((allapps.includes("AMP-for-Endpoints")) || (fileMan.fileExistsAtPath("/opt/cisco/amp"))){
        results += "[+] Cisco AMP for endpoints found.\n";
        b = 1;
}

if ((fileMan.fileExistsAtPath("/usr/local/bin/jamf")) || (fileMan.fileExistsAtPath("/usr/local/jamf"))){
        results += "[+] JAMF found on this host.\n";
        b = 1;
}

if (fileMan.fileExistsAtPath("/Library/Application Support/Malwarebytes")){
        results += "[+] Malwarebytes A/V found.\n";
        b = 1;
}

if (fileMan.fileExistsAtPath("/usr/local/bin/osqueryi")){
        results += "[+] osquery found.\n";
        b = 1;
}

if (fileMan.fileExistsAtPath("/Library/Sophos Anti-Virus/")){
        results += "[+] Sophos A/V found.\n";
        b = 1;
}

if ((allapps.includes("lulu")) || (fileMan.fileExistsAtPath("/Library/Objective-See/Lulu")) || (fileMan.fileExistsAtPath("/Applications/LuLu.app"))){
        results += "[+] LuLu firewall found.\n";
        b = 1;
}

if ((allapps.includes("dnd")) || (fileMan.fileExistsAtPath("/Library/Objective-See/DND")) || (fileMan.fileExistsAtPath("/Applications/Do Not Disturb.app/"))){
        results += "[+] LuLu firewall found.\n";
        b = 1;
}

if ((allapps.includes("WhatsYourSign")) || (fileMan.fileExistsAtPath("/Applications/WhatsYourSign.app"))){
        results += "[+] Whats Your Sign code signature info tool found.\n";
        b = 1;
}

if ((allapps.includes("KnockKnock")) || (fileMan.fileExistsAtPath("/Applications/KnockKnock.app"))){
        results += "[+] Knock Knock persistence detection tool found.\n";
        b = 1;
}

if ((allapps.includes("reikey")) || (fileMan.fileExistsAtPath("/Applications/ReiKey.app"))){
        results += "[+] ReiKey keyboard event taps detection tool found.\n";
        b = 1;
}

if ((allapps.includes("OverSight")) || (fileMan.fileExistsAtPath("/Applications/OverSight.app"))){
        results += "[+] OverSight microphone and camera monitoring tool found.\n";
        b = 1;
}

if ((allapps.includes("KextViewr")) || (fileMan.fileExistsAtPath("/Applications/KextViewr.app"))){
        results += "[+] KextViewr kernel module detection tool found.\n";
        b = 1;
}

if ((allapps.includes("blockblock")) || (fileMan.fileExistsAtPath("/Applications/BlockBlock Helper.app"))){
        results += "[+] Block Block persistence location monitoring tool found.\n";
        b = 1;
}

if ((allapps.includes("Netiquette")) || (fileMan.fileExistsAtPath("/Applications/Netiquette.app"))){
        results += "[+] Netiquette network monitoring tool found.\n";
        b = 1;
}

if ((allapps.includes("processmonitor")) || (fileMan.fileExistsAtPath("/Applications/ProcessMonitor.app"))){
        results += "[+] Objective See Process Monitor tool found.\n";
        b = 1;
}

if ((allapps.includes("filemonitor")) || (fileMan.fileExistsAtPath("/Applications/FileMonitor.app"))){
        results += "[+] Objective See File Monitor tool found.\n";
        b = 1;
}

if (b == 0){
	results += "[-] No security products found.";
}

results += "#######################################\n";

//console.log(results);

return results
}

//AVEnum()
