Dim mySendKeys
set mySendKeys = CreateObject("WScript.shell")

'JavaWindow("eclipse-workspace2 - Eclipse").JavaTree("Tree").Activate "ChangeMan ZMF4ECL Version(8.2.6.601202205261419);A004-ZMFQSH - ZMF Version(8.2.0.6)" @@ hightlight id_;_1953807380_;_script infofile_;_ZIP::ssf1.xml_;_
'JavaWindow("eclipse-workspace2 - Eclipse").JavaTree("Tree").Activate "ChangeMan ZMF4ECL Version(8.2.6.601202205261419);A004-ZMFQSH - ZMF Version(8.2.0.6);ZMF Applications" @@ hightlight id_;_1953807380_;_script infofile_;_ZIP::ssf2.xml_;_
'JavaWindow("eclipse-workspace2 - Eclipse").JavaTree("Tree").Activate "ChangeMan ZMF4ECL Version(8.2.6.601202205261419);A004-ZMFQSH - ZMF Version(8.2.0.6);ZMF Applications;Default Application Folder" @@ hightlight id_;_1953807380_;_script infofile_;_ZIP::ssf3.xml_;_

'JavaWindow("eclipse-workspace2 - Eclipse").JavaTree("Tree").Activate DataTable("Version", dtGlobalSheet) @@ hightlight id_;_1953807380_;_script infofile_;_ZIP::ssf12.xml_;_
'JavaWindow("eclipse-workspace2 - Eclipse").JavaMenu("New SAN1 Package").Select
'JavaWindow("eclipse-workspace2 - Eclipse").JavaMenu("New SAN1 Package").TYPE micCtrlDwn + micShiftDwn + "N" + micShiftUp + micCtrlUp


'mySendKeys.SendKeys("^N")
'wait 4

'JavaWindow("eclipse-workspace2 - Eclipse").JavaMenu("Help").JavaMenu("Check for Updates").Select @@ hightlight id_;_1028564175_;_script infofile_;_ZIP::ssf15.xml_;_


'JavaWindow("eclipse-workspace2 - Eclipse").JavaTree("Tree").Click "147","386","RIGHT"
'JavaWindow("eclipse-workspace2 - Eclipse").JavaMenu("New SAN1 Package").Select
'JavaWindow("eclipse-workspace2 - Eclipse").JavaTree("Tree").Click "172","384","RIGHT"
'JavaWindow("eclipse-workspace2 - Eclipse").JavaMenu("New SAN1 Package").Select
'JavaWindow("eclipse-workspace2 - Eclipse").JavaWindow("ZMF/Eclipse").JavaButton("Finish").Click @@ hightlight id_;_318145665_;_script infofile_;_ZIP::ssf10.xml_;_
'JavaWindow("eclipse-workspace2 - Eclipse").JavaWindow("ZMF/Eclipse").JavaWindow("ZMF/Eclipse").JavaButton("OK").Click @@ hightlight id_;_479647126_;_script infofile_;_ZIP::ssf11.xml_;_


'JavaWindow("eclipse-workspace2 - Eclipse").JavaWindow("ZMF/Eclipse_2").JavaWindow("ZMF/Eclipse").JavaStaticText("CMN2100I - SAN1000073").Output CheckPoint("Package Name") @@ hightlight id_;_363039149_;_script infofile_;_ZIP::ssf16.xml_;_

'JavaWindow("eclipse-workspace2 - Eclipse").JavaWindow("ZMF/Eclipse_2").JavaWindow("ZMF/Eclipse").Output CheckPoint("ZMF/Eclipse") @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf17.xml_;_
