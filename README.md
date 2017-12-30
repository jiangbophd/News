# 前言
本工程主要用于大家学习Cordova + React + Onsenui + Redux如何制作混合应用App, 大家可以自行下载安装，此工程为GPL协议，仅供学习用途，禁止用于任何商业用途。

# IOS + Android效果展示

<img src="readme/ios-show.gif">
<img src="readme/android-show.gif">

# 安装

1. 安装nodejs环境

2. npm install -g yarn

3. yarn

# 运行

1. npm start


## IOS真机测试

2. npm run start:ios

3. npm run start:ios:update

4. npm run build:ios

## Android真机测试

1. npm run start:android

2. npm run start:android:update

3. npm run build:android

# Codepush热更新

1. npm install -g appcenter-cli

2. appcenter login

3. appcenter profile list

   appcenter app list

4. appcenter codepush deployment add -a <ownerName>/<appName> Staging
   appcenter codepush deployment add -a <ownerName>/<appName> Production

   appcenter codepush deployment list -a <ownerName>/<appName>

5. cd releases

6. appcenter codepush release -a richard.jiang-1tvl/NewsApp -c "./platforms/ios/www"  -t "*" -d "Production" -v "1.0"

# 视频讲解地址

<a href="http://edu.csdn.net/course/detail/6540" target="blank">http://edu.csdn.net/course/detail/6540</a>

