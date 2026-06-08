// Challenge 25: Object Analysis and Abstraction in JavaScript

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Example entity: Smartphone (high-end device model)

const smartphone = {
    brand: "TechNova",
    model: "X Pro Max",
    releaseYear: 2025,
    priceUSD: 1199,
    is5G: true,
    operatingSystem: "NovaOS 6",
    storageOptionsGB: [128, 256, 512, 1024],
    colorsAvailable: ["black", "silver", "blue", "green"],

    dimensions: {
        heightMm: 160.2,
        widthMm: 74.8,
        thicknessMm: 8.3,
        weightGrams: 198
    },

    hardware: {
        processor: "OctaCore X9 Ultra",
        ramGB: 12,
        gpu: "NovaGraphics 780",
        batteryMah: 4800
    },

    camera: {
        rear: {
            main: "108MP",
            ultraWide: "16MP",
            telephoto: "12MP"
        },
        front: {
            resolution: "32MP"
        },
        features: ["HDR", "4K video", "Night mode", "AI stabilization"]
    },

    connectivity: {
        wifi: true,
        bluetooth: "5.3",
        nfc: true,
        gps: true,
        usbType: "USB-C"
    },

    sensors: [
        "accelerometer",
        "gyroscope",
        "proximity",
        "fingerprint",
        "face recognition"
    ],

    isWaterResistant: true,
    waterResistanceRating: "IP68",
    warrantyYears: 2,

    describeDevice: function () {
        return (
            this.brand +
            " " +
            this.model +
            " runs " +
            this.operatingSystem +
            " with " +
            this.hardware.ramGB +
            "GB RAM."
        );
    }
};

// Desktop test
console.log(smartphone);
console.log(smartphone.describeDevice());

/*
-------------------------------------------------
DESKTOP TEST (EXPECTED BEHAVIOR)
-------------------------------------------------

1. Prints full smartphone object with:
   - 12–20+ properties
   - nested objects (dimensions, hardware, camera, etc.)
   - arrays (storageOptionsGB, sensors, etc.)

2. Method output:
   "TechNova X Pro Max runs NovaOS 6 with 12GB RAM."

-------------------------------------------------
*/