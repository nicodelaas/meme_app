const MDCBanner = mdc.banner.MDCBanner;
const MDCCheckbox = mdc.checkbox.MDCCheckbox;
const MDCChip = mdc.chips.MDCChip;
const MDCChipSet = mdc.chips.MDCChipSet;
const MDCCircularProgress = mdc.circularProgress.MDCCircularProgress;
const MDCDataTable = mdc.dataTable.MDCDataTable;
const MDCDialog = mdc.dialog.MDCDialog;
const MDCDrawer = mdc.drawer.MDCDrawer;
const MDCFloatingLabel = mdc.floatingLabel.MDCFloatingLabel;
const MDCFormField = mdc.formField.MDCFormField;
const MDCIconButtonToggle = mdc.iconButton.MDCIconButtonToggle;
const MDCLineRipple = mdc.lineRipple.MDCLineRipple;
const MDCLinearProgress = mdc.linearProgress.MDCLinearProgress;
const MDCList = mdc.list.MDCList;
const MDCMenu = mdc.menu.MDCMenu;
const MDCMenuSurface = mdc.menuSurface.MDCMenuSurface;
const MDCNotchedOutline = mdc.notchedOutline.MDCNotchedOutline;
const MDCRadio = mdc.radio.MDCRadio;
const MDCRipple = mdc.ripple.MDCRipple;
const MDCSegmentedButton = mdc.segmentedButton.MDCSegmentedButton;
const MDCSelect = mdc.select.MDCSelect;
const MDCSlider = mdc.slider.MDCSlider;
const MDCSnackbar = mdc.snackbar.MDCSnackbar;
const MDCSwitch = mdc.switchControl.MDCSwitch;
const MDCTabBar = mdc.tabBar.MDCTabBar;
const MDCTextField = mdc.textField.MDCTextField;
const MDCTooltip = mdc.tooltip.MDCTooltip;
const MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.main-content');

window.addEventListener('load', () =>{
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("service-worker.js");
    }
})

listEl.addEventListener('click', (event) => {
    drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
    mainContentEl.querySelector('input, button').focus();
});

function openDrawer()
{
    drawer.open = true;
}

function home()
{
    document.querySelectorAll('.mdc-image-list__item').forEach(item =>{
        item.classList.remove('hidden');
    });
}

function chooseImages(className){

    document.querySelectorAll('.mdc-image-list__item').forEach(item =>{
        item.classList.add('hidden');
    });
    document.querySelectorAll('.'+className).forEach(item =>{
        item.classList.remove('hidden');
    });
}

// sheet meme
const topAppBarMeme = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar-meme'));
const tabBarBottomMeme = new MDCTabBar(document.querySelector('.mdc-tab-bar-meme'));

// alle image-list  items op je homepage krijgen

let imageListItems = document.querySelectorAll('.mdc-image-list__item')

function openSheet(sheetID)
{
    let sheet = document.getElementById(sheetID);
    sheet.classList.remove('hidden');

    setTimeout(function(){sheet.classList.remove('sheet-out-of-view'); }, 10);

    setTimeout(function(){
        let maxHoogteMain = sheet.getElementsByTagName('main')[0].offsetHeight - 10;
        document.getElementById('main-content').style.height = maxHoogteMain + 'px';
        document.getElementById('main-content').style.overflowY = 'hidden';
    }, 300);

    let newUrl = window.location.href + '?sheet=' + sheetID;
    history.pushState(null,null,newUrl);
}

// open de meme sheet

document.querySelectorAll('.mdc-image-list__image').forEach(collection => {
    collection.addEventListener('click', function(){
        document.querySelector('.meme-title').innerHTML = this.title || "No title";
        document.querySelector('.meme-image').src = this.src;
        document.querySelector('.sheet').classList.add("sheet-open");
    });
});


function closeSheets(){

    // herstel de hoogte van de homepage weer naar oorspronkelijke formaat

    document.getElementById('main-content').style.height = 'auto';
    document.getElementById('main-content').style.overflowY = 'auto';

    let sheets = document.querySelectorAll('.sheet');
    sheets.forEach(sheet => {
        sheet.classList.add('sheet-out-of-view');
        setTimeout(function(){sheet.classList.add('hidden');} ,310);
    });

    history.pushState(null,null,window.location.pathname);
}


imageListItems.forEach(imageListItem => {
       imageListItem.addEventListener('click',function(){
           openSheet('sheet-meme')});
    });

