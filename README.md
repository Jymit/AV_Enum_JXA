# AV_Enum_JXA

This is a simple JXA file to provide situational awareness on security products installed on a macOS host. It checks for the presence of several tools, including:

- Carbon Black Defense

- Carbon Black Response

- JAMF

- Xagt

- Littlesnitch

- Falcon Endpoint

- ESET

- OpenDNS

- SentinelOne

- Cisco AMP

- OSQuery

- Sophos

- Lulu

- DND

- WhatsYourSign

- KnockKnock

- reikey

- OverSight

- KextViewer

- BlockBlock

- Netiquette

- ProcessMonitor

- FileMonitor

----------------

**If run from a sandboxed app, the component of this tool that checks running apps will still work but the component that checks files on disk will not (due to limited disk access permissions)**

----------------

**To run locally from a Terminal:**

1. edit the final line of code from "return results" to "console.log(results)"

2. After final curly brace, add "AVEnum()" to invoke the AVEnum() function.

3. From Terminal run: 
> osascript AVEnum.js

**To run remotely via Mythic:**

Download this script and run via Mythic:

1. > jsimport AVEnum.js
2. > jsimport_call AVEnum()
3. Results will be returned in Mythic
