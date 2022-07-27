 @@ hightlight id_;_1613279256_;_script infofile_;_ZIP::ssf50.xml_;_
JavaWindow("eclipse-workspace-2021-09").Maximize @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf85.xml_;_
JavaWindow("eclipse-workspace-2021-09").Maximize @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf121.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Expand DataTable("p_ZMF_A004-SH", dtGlobalSheet) @@ hightlight id_;_1419765033_;_script infofile_;_ZIP::ssf122.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Userid:").Set Parameter("TSOuserId") @@ hightlight id_;_1332205096_;_script infofile_;_ZIP::ssf88.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Password:").Set Parameter("TSOpwd") @@ hightlight id_;_351862190_;_script infofile_;_ZIP::ssf89.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaButton("OK").Click @@ hightlight id_;_78770026_;_script infofile_;_ZIP::ssf90.xml_;_

JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Activate DataTable("p_ZMF_Applications", dtGlobalSheet) @@ hightlight id_;_907561070_;_script infofile_;_ZIP::ssf92.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Activate DataTable("p_ZMF_App_DefaultFolder", dtGlobalSheet) @@ hightlight id_;_907561070_;_script infofile_;_ZIP::ssf93.xml_;_
wait 1
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Select DataTable("p_ZMF_A004-SH_SAN1", dtGlobalSheet) @@ hightlight id_;_907561070_;_script infofile_;_ZIP::ssf94.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Click "123","386","RIGHT" @@ hightlight id_;_907561070_;_script infofile_;_ZIP::ssf95.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaMenu("New SAN1 Package").Select @@ hightlight id_;_1988951302_;_script infofile_;_ZIP::ssf96.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Package Title:").Set "UFT SH Pkg07" @@ hightlight id_;_1518055247_;_script infofile_;_ZIP::ssf97.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Requestor name:").Set "Doug Hoffman" @@ hightlight id_;_1572026178_;_script infofile_;_ZIP::ssf98.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Work request:").Set "UFT007" @@ hightlight id_;_1828330674_;_script infofile_;_ZIP::ssf99.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Requestor phone:").Set "x123" @@ hightlight id_;_399990476_;_script infofile_;_ZIP::ssf100.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaEdit("Department:").Set "QA" @@ hightlight id_;_1863915596_;_script infofile_;_ZIP::ssf101.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaButton("Next >").Click @@ hightlight id_;_2030567922_;_script infofile_;_ZIP::ssf102.xml_;_
JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaButton("Next >").Click @@ hightlight id_;_2030567922_;_script infofile_;_ZIP::ssf103.xml_;_

JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse").JavaButton("Finish").Click @@ hightlight id_;_1366069082_;_script infofile_;_ZIP::ssf113.xml_;_


JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse_2").JavaWindow("ZMF/Eclipse").JavaStaticText("CMN2100I - SAN1000125").Output CheckPoint("CMN2100I - SAN1000128 change package has been created.(st)") @@ hightlight id_;_883089676_;_script infofile_;_ZIP::ssf120.xml_;_


JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse_2").JavaWindow("ZMF/Eclipse").JavaButton("OK").Click @@ hightlight id_;_1671393364_;_script infofile_;_ZIP::ssf115.xml_;_

'JavaWindow("eclipse-workspace-2021-09").JavaWindow("ZMF/Eclipse_2").JavaWindow("ZMF/Eclipse").JavaStaticText("CMN2100I - SAN1000102 change package has been created.(st)").Output CheckPoint("CMN2100I - SAN1000099 change package has been created.(st)")

 'Shutdown Eclipse
 JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Collapse DataTable("p_ZMF_App_DefaultFolder", dtGlobalSheet)
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Collapse DataTable("p_ZMF_Applications", dtGlobalSheet)
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Collapse DataTable("p_ZMF_A004-SH_Connected", dtGlobalSheet)
JavaWindow("eclipse-workspace-2021-09").JavaTree("Tree").Click "66","25","RIGHT"
JavaWindow("eclipse-workspace-2021-09").JavaMenu("Disconnect").Select
JavaWindow("eclipse-workspace-2021-09").JavaMenu("File").JavaMenu("Exit").Select
'JavaWindow("eclipse-workspace-2021-09").Maximize

