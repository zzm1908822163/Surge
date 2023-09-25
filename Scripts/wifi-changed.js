const WIFI_DONT_NEED_PROXYS = ['ASUS_5G']; 
   if (WIFI_DONT_NEED_PROXYS.includes($network.wifi.ssid)) { 
 $surge.setOutboundMode('direct'); 
 } else { 
 $surge.setSelectGroupPolicy('Final-select', 'Group'); 
 $surge.setOutboundMode('rule');  } 
   $done(); 
