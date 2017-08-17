# SchoolSpider Mobile App

In build.gradle add this option to increase heap size.

android {
    ....
         dexOptions {
            javaMaxHeapSize "4g"
        }


To update project name
.\development\nativescript\finance-equation\platforms\android\settings.gradle

rootProject.name = "SchoolSpider"
