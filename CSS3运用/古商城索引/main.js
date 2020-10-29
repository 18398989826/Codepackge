const {app,globalShortcut, BrowserWindow} = require('electron');
let win;
let windowConfig = {
    width:1920,
    height:1080,
    center:true,
    alwaysOnTop:true,
    fullscreen:true,
    frame:true,
};
function createWindow(){
    win = new BrowserWindow(windowConfig);
    //开启调试工具
    // win.webContents.openDevTools();
    //关闭菜单功能
    // win.setMenuBarVisibility(false);//或者
    win.setMenu(null);
    //全屏控制
    globalShortcut.register('ESC', () => {
        win.setFullScreen(false);
    });
    globalShortcut.register('F11', () => {
        win.setFullScreen(true);
    });
    //事件
    win.on('close',() => {
        //回收BrowserWindow对象
        win = null;
    });
    //加载入口文件
    win.loadURL(`file://${__dirname}/index.html`);
}
app.on('ready',createWindow);
app.on('window-all-closed',() => {
    app.quit();
});
app.commandLine.appendSwitch('disable-pinch');
app.on('activate',() => {
    if(win == null){
        createWindow();
    }
});

	    