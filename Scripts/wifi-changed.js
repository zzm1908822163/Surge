const WIFI_DONT_NEED_PROXYS = ['ASUS_5G']; 
   if (WIFI_DONT_NEED_PROXYS.includes($network.wifi.ssid)) { 
 $surge.setOutboundMode('direct'); 
 $('Surge', 'Wi-Fi changed', 'use direct mode'); 
 } else { 
 $surge.setSelectGroupPolicy('Final-select', 'Group'); 
 $surge.setOutboundMode('rule'); 
 $('Surge', 'Wi-Fi changed', 'use rule-based proxy mode'); 
 } 
   $done(); 
