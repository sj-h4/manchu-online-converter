mod utils;

use manchu_converter::ManchuConverter;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rust-lib!");
}

#[wasm_bindgen]
pub fn convert_to_manchu(text: &str) -> String {
    let converted_text = text.convert_to_manchu().unwrap();
    converted_text
}
