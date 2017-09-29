# react-native-toast

cd /Example to test the sample code

steps:

```
npm install
```

``` 
react-native run-android
```

to import this library

```
npm install git+https://github.com/avinash2fly/react-native-toast.git
```

## How to create native modules

***ToastModule.java***

1) Inherit ***ReactContextBaseJavaModule*** and implement below method

2) assign module Name

```
@Override
  public String getName() {
    return "ToastAndroid";
  }
  ```
  
3) define method
  
  ```
  @ReactMethod
  public void show(String message, int duration) {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
  }
  ```



***ReactPackage.java***

*It is used to register module with react*

1) Inherit ***ReactContextBaseJavaModule*** and implement below method

2) code to register modules
```
@Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new ToastModule(reactContext));

    return modules;
  }
  ```
  

  
  
  
