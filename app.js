var Deck = require('kittik');

Deck.create({

  shapes: [{
    name: 'slide1',
    type: 'FigText',
    options: {
      text: 'About  Me',
      foreground: 'red',
      x: 'center',
      y: 2
    }
  }, {
    name: 'slide2',
    type: 'FigText',
    options: {
      text: 'What is my skill ?',
      foreground: 'white',
      x: 'center',
      y: 2
    }
  }, {
    name: 'slide3',
    type: 'FigText',
    options: {
      text: 'Base OS is only LINUX',
      foreground: 'white',
      x: 'center',
      y: 2
    }
  }],
  animations: [{
    name: 'slide1-ani',
    type: 'Print',
    options: {
      duration: 1000 // FIX ME to 1000
    }
  }],
  slides: [{
    order: [
      'slide1::slide1-ani',
    ]
  }, {
    shapes: [{
      name: 'slide1-2',
      type: 'FigText',
      options: {
        text: 'Jitiwattana Robru',
        width: '80%',
        foreground: 'white',
        x: 'center',
        y: 12
      }
    }, {
      name: 'slide1-3',
      type: 'FigText',
      options: {
        text: '..........BabyJazZ........',
        width: '80%',
        foreground: 'white',
        x: 'center',
        y: 20
      }
    }, {
      name: 'slide1-4',
      type: 'FigText',
      options: {
        text: '3rd year',
        width: '80%',
        foreground: 'white',
        x: 'center',
        y: 28
      }
    }],
    animations: [{
      name: 'Print',
      type: 'Print',
      options: {
        duration: 100 // FIX ME TO 1000
      }
    }],
    order: [
      'slide1',
      'slide1-2::Print',
      'slide1-3::Print',
      'slide1-4::Print',
    ],
  }, {
    shapes: [{
      name: 'slide2-4',
      type: 'Text',
      options: {
        text: `
        '..---::::///+++oooooooo/'                                                                          
oooooooooooo+++////:::ooo+'                                                                         
/oooo.''              '+ooo.                                                                        
 +ooo+'                 /ooo:                                                                       
  +ooo+'                 /ooo/                                                                      
  '+ooo+'                 :ooo+'                                                                    
   'oooo+'                 -oooo.                                                                   
    'oooo+'                 .oooo-                                                                  
     .oooo+'                 '+ooo:                                       ''.--://++ooo/'           
      .oooo+                   /ooo/                                 :++oooooooooo+//:+oo-          
       .oooo+                   /ooo+'                               -oooo:--.''       -oo+.        
        -oooo/                   :oooo.                               '+oo+'            '/oo:'      
         -oooo/                   -oooo-                                :ooo:             -ooo-     
          :oooo/                   .oooo:                                .+oo+'            '/oo/'   
           :oooo/                   '+ooo/                                 :ooo-             .+oo:  
            /oooo/                    /ooo+'                                .ooo/'        '.-:/ooo+.
             /oooo/                    /oooo.                                '/ooo-.-:/+oooooooooo+/
              +oooo/                    :oooo-                           ''.-:/oooooooooooo+/:-.'   
               +oooo/                    -oooo:                  '.--:/+oooooooooooooo-.'           
               '+oooo/                    .oooo/         '.-:/++oooooooooo+/:-.'  .ooo+'            
                'ooooo:                    '+ooo+.--:/+ooooooooooo+//:-.'          '/ooo-           
                 'ooooo:                '.-:/oooooooooooooo+/:-.'                    -ooo+'         
                  'ooooo:      ''.-:/+oooooooooooooo/:-.'                             '/ooo-        
                   .ooooo:::/+ooooooooooooo+/:-/oooo:                                   -ooo+'      
                    .ooooooooooooooo+/:-.'      :oooo/                                   '+ooo-     
                     .+ooooo+/:-.'               -oooo+                                    -ooo+'   
                        ''                        .oooo+'                                .-:+oooo-  
                                                   .ooooo.                         .-:/oooooooooo+  
                                                    'ooooo-                  .-:/ooooooooooo/:-'    
                                                     '+oooo:           .-:/ooooooooooo+/-.'         
                                                       /oooo/    '-:/+ooooooooooo/:-'               
                                                        /oooo+/+ooooooooooo+:-.                     
                                                         -ooooooooooo+/:.'                          
                                                          .+ooo+/:-'                                

        `,
        foreground: 'yellow',
        x: 'center',
        y: 20
      }
    }],
    animations: [{
      name: 'slide2-4-print',
      type: 'Print',
      options: {
        duration: 1000 // FIX ME TO 4000
      }
    }],
    order: [
      'slide2',
      'slide2-4::slide2-4-print'
    ]
  },{
    shapes: [{
      name: 'slide2-5',
      type: 'Text',
      options: {
        text: `

 
.ooooooooooooooooooo. 
                                 '-/+oooooooooooooooooooo+:-                                  
                              '-+oooooooooo++////++ooooooo/'  .-::-.                          
                            ./ooooooo+:-.'          '.-:+-  -+oooooo+-                        
                          .+oooooo/-'                      -oooooooooo-                       
                        '/ooooo+:'                         /oooooooooo+                       
                       .+ooooo-'                           -oooooooooo-                       
                      .ooooo/'             ''....''         ./oooooo+.                        
                     .ooooo:           '.:++oooooo++:.'       '.--.'  ./.                     
                    'ooooo:          ':+oooooooooooooo+:'          ':+ooo'                    
                    /oooo/          -+oooooooooooooooooo+-          /oooo/                    
                   'ooooo.         -oooooooooooooooooooooo-         .ooooo'                   
                   -oooo+         'oooooooooooooooooooooooo'         +oooo-                   
                   :oooo:         :oooooooooooooooooooooooo:         :oooo:                   
                   :oooo:         :oooooooooooooooooooooooo:         :oooo:                   
                   -oooo/         .oooooooooooooooooooooooo.         /oooo-                   
                   .ooooo          /oooooooooooooooooooooo/          ooooo.                   
                    +oooo:         '/oooooooooooooooooooo/'         :oooo+                    
                    .ooooo.          -oooooooooooooooooo-          .ooooo.                    
                     :ooooo.          '-/oooooooooooo/-'          .ooooo:                     
                      /ooooo.            '.-:://::-.'            .ooooo/                      
                       :ooooo/'                                '/ooooo:                       
                        -oooooo:'                            ':oooooo-                        
                         '/oooooo/.                        ./oooooo/'                         
                           '/ooooooo/-'                '-/ooooooo/'                           
                             ':+oooooooo+/:---..---:/+oooooooo+:'                             
                                ':+oooooooooooooooooooooooo+:'                                
                                    .-//+oooooooooooo+//-.                                    
                                          ''......''                                          
                                                                                              
                                                                                              
                  ''''''                       '''''                             '''''        
+/////        .-/+++oo+++/-.        /////''.:/++oo+++/-.      ./////-       '.:/+++oo++/:.'   
sooooo     '-+oooooooooooooo+-'     ooooo/+ooooooooooooo/'    -ooooo:     ':+ooooooooooooo+:' 
sooooo    .+oooooo+/::/+oooooo+.    ooooooooo+/:::/ooooooo.   -ooooo:    -oooooo+/:::/+oooooo-
sooooo   -ooooo+-'      '-+ooooo-   ooooooo:.      '/ooooo+   -ooooo:   :ooooo/.'      ./oo+-.
sooooo  'ooooo+'          '+ooooo'  oooooo.          +ooooo.  -ooooo:  -ooooo:           .'   
sooooo  :ooooo'            'ooooo-  oooooo           :ooooo-  -ooooo:  +oooo+                 
sooooo  :ooooo              ooooo:  oooooo           -ooooo-  -ooooo:  ooooo:                 
sooooo  -ooooo.            .ooooo-  oooooo           -ooooo-  -ooooo:  /oooo+                 
sooooo   +oooo+.          .+oooo+   oooooo           -ooooo-  -ooooo:  .ooooo/'          --'  
sooooo   .oooooo/.      .:oooooo.   oooooo           -ooooo-  -ooooo:   -ooooo+-'     '-+ooo/.
sooooo    '/ooooooo+//+ooooooo/'    oooooo           -ooooo-  -ooooo:    .+oooooo++//+oooooo+-
sooooo      ./oooooooooooooo/.      oooooo           -ooooo-  -ooooo:      ./ooooooooooooo/-  
ooooo+---------/+oooooooo+/---------oooooo-----------/ooooo:--:ooooo/---------/+oooooooo/-----

        `,
        foreground: 'blue',
        x: 'center',
        y: 8
      }
    }],
    animations: [{
      name: 'slide2-5-print',
      type: 'Print',
      options: {
        duration: 1000 // FIX ME TO 4000
      }
    }],
    order: [
      'slide2',
      'slide2-5::slide2-5-print'
    ]
  },{
    shapes: [{
      name: 'slide2-1',
      type: 'Text',
      options: {
        text: `                                                                                   
                                   '-::-.'                '-:::-'                                   
                                 .gRRRRRRRR+:'        ':RRRRRRRRRR'                                 
                                'gRR.   .:+RRRR-    :RRRR+:.   .RRR'                                
                                +gR.        -+RRR//RRR+.        .RR/                                
                                sgR           '/RRRR/            RRs                                
                                sgR           /RRRRRR/           RRs                                
                                gRR'        -RRR:  /RRR-        'RR+                                
                                :gR:  '.--:RRRR+++++RRRRR:--.'  :RR:                                
                               .:gRRRRRRRRRRRssssssssssRRRRRRRRRRRR:.                               
                          '-+sgRRRRRR:-.+RRR'          'RRR+.-:sRRRRRRs+-'                          
                       ':sgRRR/-' RRR' +RR/     .--.     /RR+ 'RRR '-/RRRRs:'                       
                      /gRR/.      .RRRRRR:   .+RRRRRR+'   :RRRRRR.      ./RRR/                      
                     gRR:          /RRRR-   .RRRRRRRRRR.   -RRRR:          :RRs                     
                    'gRR            RRR+    :RRRRRRRRRR:    +RRR            RRR'                    
                     +gR+'         /RRRR:   'RRRRRRRRRR'   :RRRR+         '+RR+                     
                      :gRRR:'     -RR++RR/   '/sRRRRs/'   /RR++RR-     ':RRRR:                      
                        -+gRRs+:.'RRR  /RRR      ''      RRR/  sRR'.:+sRRR+-                        
                           .:gRRRRRRs/:-+RRs.          .sRR+-:/sRRRRRRR:.                           
                                -gRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR-                                
                                :gR:    '.-/RRR+::::+RRR/..'    -RR/                                
                                gRR'        .sRR+''+RRs.         RRs                                
                                sgR           :RRRRRR:           RRR                                
                                gRR           '+RRRR+.           RRs                                
                                /gR-       ':RRRs::sRRs:'       -RR+                                
                                 sgR:'''-/RRRR+.    .+RRRs/-.'':RRR'                                
                                 '+gRRRRRRs/-          ./RRRRRRRR+'                                 
                                    .--.'                  '.-..                                    

        `,
        foreground: 'blue',
        x: 'center',
        y: 20
      }
    }],
    animations: [{
      name: 'slide2-1-print',
      type: 'Print',
      options: {
        duration: 1000 // FIX ME TO 4000
      }
    }],
    order: [
      'slide2',
      'slide2-1::slide2-1-print'
    ]
  }, {
    shapes: [{
      name: 'slide2-2',
      type: 'Text',
      options: {
        text: `

                                            '.--::::-..'                                            
                                      ''.-:::::::::::::::--.''                                      
                                  .-:::::::::::::AA::::::::::::-..                                  
                                  ::::::::::::::AAAA::::::::::::::                                  
                                  :::::::::::::AAAAAA::::::::::::-                                  
                                  -:::::::::::AAAAAAAA:::::::::::.                                  
                                  .::::::::::AAA::::AAA::::::::::'                                  
                                  ':::::::::AAAA::::AAAA:::::::::'                                  
                                   ::::::::AAAAA::::AAAAA::::::::                                   
                                   -:::::::AAAAAAAAAAAAAAA::::::-                                   
                                   .::::::AAAAAAAAAAAAmAAAA:::::.                                   
                                   ':::::AAAA::::::::::AAAA:::::'                                   
                                    ::::AAAAA::::::::::AAAAA::::                                    
                                    .-::::::::::::::::::::::::-.                                    
                                       '-:::::::::::::::::-.'                                       
                                           .-::::::::::-.                                           
                                              '.-::-.'                                              

        `,
        foreground: 'red',
        x: 'center',
        y: 20
      },
    }],
    animations: [{
      name: 'slide2-2-print',
      type: 'Print',
      options: {
        duration: 100 // FIX ME TO 4000
      }
    }],
    order: [
      'slide2',
      'slide2-2::slide2-2-print'
    ]
  }, {
    shapes: [{
      name: 'slide2-3',
      type: 'Text',
      options: {
        text: `

                                                                   '-.'                              
                                                                  '----..'                          
                                                                  '------.                          
                                                                  '------.                          
                                                                  '------.                          
                                                                  '------.                          
                                                                  '------.                          
       ''.-..'                   '.---.'                   ''...''------.            ''.-.'        
    '..--------.''            .:-----------'             '..-------------.         '..-------.''    
''.---------------..'     '.-----.......-----:.      ''.-----------------.     ''.--------------..' 
---------------------'    .----.         -----.-    .--------------------.    '--------------------.
--------.'''..-------'    .---.           .---.-    .-------..''..-------.    '-------..''..--------
-------'      .------'    .---.           .---.-    .------.      .------.    '------. ----''----..'
-------       .------'    .---.           .---.-    .------'      '------.    '------. ----.'..''   
-------       .------'    .---.           .---.-    .------.'    '.------.    '-------''.-'         
-------       .------'    .----.         .----.:    .---------..---------.    '---------..'         
-----.'       '..----'    .:-----.      .-----:'    '.------------------.'    '..----------..''     
-..''            '..-'      :.----.....----.:         ''..-----------.''         '..----------.'    
'                   '          ..--------.     '--.'      '..----..'                ''..---..'      
                                   '--'    '.:0+0-0+0-'      ''''                       '''         
                                        '.://:.    '.:+/:.'                                         
                                      '/+/-'           '-/+'-                                       
                                      :o.   :J. :SSSSS:   -o-                                       
                                      :o'   :J: :SS:      .o-                                       
                                      :o'   :J: :SS:      .o-                                       
                                      :o'   :J: :SSSSSSS: .o-                                       
                                      :o'   :J:      :SS: .o-                                       
                                      :o:'  :J:      :SS: :o.                                       
                                       .:+JJJJ. :SSSSSSS:+:.                                        
                                          '...--' '-/+/-'                                           
                                              ./+++:.                                               
        `,
        foreground: 'green',
        x: 'center',
        y: 20
      },
    }],
    animations: [{
      name: 'slide2-3-print',
      type: 'Print',
      options: {
        duration: 1000 // FIX ME TO 4000
      }
    }],
    order: [
      'slide2',
      'slide2-3::slide2-3-print'
    ]
  }, {
    shapes: [{
      name: 'slide3-1',
      type: 'Text',
      options: {
        text: `
                                                 '-+shmNNMMNmds+-                                           
                                       /hNMMMMMMMMMMMMMMMNs-                                        
                                     -dMMMMMMMMMMMMMMMNosNMMd:                                      
                                    :NMMMMMMMMMMMMMMMMh .yMMMMy'                                    
                                   'mMMMMMMMMMMMMMMMMMMmNMMMMMMh'                                   
                                   /MMMMMMMMMMMMMMMMMMMMMMMMMMMMo                                   
                                   sMMMMMMmNMMMMMMMMMNNNmmMMMMMMN'                                  
                                   sMMNy++yydMMMMMh/...:sdmMMMMMM/                                  
                                   oMM/    -dMMMM+'  '   /NMMMMMMy                                  
                                   oMN'odo: /MMMm  :dmo+  oMMMMMMh                                  
                                   +MN'NMdm 'syy+  dMMmN- :MMMMMMh                                  
                                   /MM/+NMMsymmdsyomMMNd. sMMMMMMm                                  
                                   :MNo.yMMNNMMNmNMMMMms:.yNMMMMMM.                                 
                                   .N/smMMMMMMMMMMMMMMNmdm:sMMMMMMo                                 
                                   'y:mNMMMMMMMMMMMmhsoydM/hMMNMMMN.                                
                                    m//+sdmNNNNmdy+osdMMms-MMm:+dNMh'                               
                                   .MM/.+syssssyydNMNdo:. .mMMs.'yMMs                               
                                   sMM+  .+mNNNNNmh+-      :NMMmdNMMMs'                             
                                  /MMN-     .---.'          /MMMMMMMMMh.                            
                                'sMMN/                       +MMMMMMMMMm:                           
                               /mMMd-                         sMMMMMMMMMNo'                         
                             'yMMMm'                           hMMMMMMMMMMh.                        
                            :mMMMMm.                           'mMMMMMMMMMMN:                       
                           +MMMMMMMNs.                          .NMMMMMMMMMMMo                      
                          sMMMMMMh/.                             :MMMmmMMMMMMMy                     
                         yMMdMMN:                                 +MMMNyhMMMMMMh'                   
                        yMMhdMm.                                   yMMMMd+NMMMMMh                   
                       oMMydMm.                                    'mMMMMm:NMMMMMy                  
                      +MMdyMN-                                      oMMMMMy+MMMMMM+                 
                     :NMMoMMo                                       'MMMMMN.MMMMMMN.                
                    'mMMdhMm'                                        dMMMMM.MMMMMMMs                
                    hMMMsNMo                                         yMMMMm-MMMMMMMN'               
                   /MMMMymM:                                         yMMMMosMMMMMMMM-               
                   sMNmddoM-                                         yMMMd-NMMMMMMMM.               
                   -:/++:'+.                                         yMmhoydddddMMMy                
                   -hNMMNy.                                      -:/:::dMMMMMMNd+o+.                
                 'oNMMMMMMm+'-:'                                +NMMMh sMMMMMMNo.ody'               
               ':dMMMMMMMMMMh.-yo.                              yMMMMm':mNMNms-:dMMM+               
         '.:/oydMMMMMMMMMMMMMm/.hNy:'                           yMMMMMd+:///:+hNMMMMs               
        omNMMMMMMMMMMMMMMMMMMMMs.sMMd/'                         hMMMMMMMNNmNNMMMMMMMN:              
        NMMMMMMMMMMMMMMMMMMMMMMMh.+NMMm/                        dMMMMMMMMMMMMMMMMMMMMNy:'           
        dMMMMMMMMMMMMMMMMMMMMMMMMm-:mMMd                        NMMMMMMMMMMMMMMMMMMMMMMMh/.         
        yMMMMMMMMMMMMMMMMMMMMMMMMMN/.yy:                     . 'MMMMMMMMMMMMMMMMMMMMMMMMMMmo        
        yMMMMMMMMMMMMMMMMMMMMMMMMMMMs'                    '-sd :MMMMMMMMMMMMMMMMMMMMMMMMMMMN.       
        dMMMMMMMMMMMMMMMMMMMMMMMMMMMMm:               '.:sdMMy sMMMMMMMMMMMMMMMMMMMMMMMMMmy-        
       'NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMo  .'''''..-/oydNMMMMM+ mMMMMMMMMMMMMMMMMMMMMMNms:'          
       .NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM: NNNNNNMMMMMMMMMMMMM--MMMMMMMMMMMMMMMMMMMNdo-              
        :sdNNMMMMMMMMMMMMMMMMMMMMMMMMMMMo dMMMMMMMMMMMMMMMMMN /MMMMMMMMMMMMMMMMMmo-                 
           '.:/oshmNMMMMMMMMMMMMMMMMMMMN: /oo+++///::::::/+o+ .MMMMMMMMMMMMMMNy:                    
                    .-/ohmMMMMMMMMMMMNs.                       sMMMMMMMMMMMNo.                      
                          '-+shmNMNh+'                          :ydNNMNmds/'                        
        `,
        foreground: 'green',
        x: 'center',
        y: 8
      },
    }],
    animations: [{
      name: 'slide3-1-print',
      type: 'Print',
      options: {
        duration: 4000 // FIX ME TO 4000
      }
    }],
    order: [
      'slide3',
      'slide3-1::slide3-1-print'
    ]
  }]
}).run();
