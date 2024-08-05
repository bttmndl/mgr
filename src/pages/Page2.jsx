import React, { useState } from "react";
import "../style/Dore.css";

const Dore = () => {
  const [sections, setSections] = useState({
    doreProcess: { filled: false, visible: true, data: { weight: "", purityAu: "", purityAg: "", purityPt: "" } },
    drilling: { filled: false, visible: false, data: { sampleLab: "", sampleRefree: "" } },
    dipSampleRaw: { filled: false, visible: false, data: { lab: "", refree: "" } },
    dip999: { filled: false, visible: false, data: { lab: "", refree: "" } },
    convergenceSilver: { filled: false, visible: false, data: { weight: "" } },
    dipSample995: { filled: false, visible: false, data: { lab: "", refree: "" } },
    dispatch: { filled: false, visible: false, data: { barType: "", quantity: "", barCustomer: "", barNumber: "" } },
    recovery: { filled: false, visible: false, data: { weight: "", purity: "", auFine: "", agFine: "" } }
  });

  const handleInputChange = (section, field, value) => {
    const updatedSection = { ...sections[section], data: { ...sections[section].data, [field]: value } };
    const isFilled = Object.values(updatedSection.data).every(val => val !== "");
    setSections({
      ...sections,
      [section]: { ...updatedSection, filled: isFilled }
    });
  };

  const handleNext = (currentSection, nextSection) => {
    setSections({
      ...sections,
      [currentSection]: { ...sections[currentSection], visible: false },
      [nextSection]: { ...sections[nextSection], visible: true }
    });
  };

  return (
    <div className="gold-refinery-page">
      {sections.doreProcess.visible && (
        <div className="section dore-process">
          <h2>Raw Dore</h2>
          <label>
            Weight:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.doreProcess.data.weight}
              onChange={(e) => handleInputChange("doreProcess", "weight", e.target.value)}
            />
          </label>
          <label>
            Purity Au%:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.doreProcess.data.purityAu}
              onChange={(e) => handleInputChange("doreProcess", "purityAu", e.target.value)}
            />
          </label>
          <label>
            Purity Ag%:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.doreProcess.data.purityAg}
              onChange={(e) => handleInputChange("doreProcess", "purityAg", e.target.value)}
            />
          </label>
          <label>
            Purity Pt%:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.doreProcess.data.purityPt}
              onChange={(e) => handleInputChange("doreProcess", "purityPt", e.target.value)}
            />
          </label>
          {sections.doreProcess.filled && (
            <button className="nextButton" onClick={() => handleNext("doreProcess", "drilling")}>Next</button>
          )}
        </div>
      )}

      {sections.drilling.visible && (
        <div className="section drilling">
          <h2>Dore 1</h2>
          <label>
            Sample Weight (in Gms) - Laboratory:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.drilling.data.sampleLab}
              onChange={(e) => handleInputChange("drilling", "sampleLab", e.target.value)}
            />
          </label>
          <label>
            Sample Weight (in Gms) - Refree:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.drilling.data.sampleRefree}
              onChange={(e) => handleInputChange("drilling", "sampleRefree", e.target.value)}
            />
          </label>
          {sections.drilling.filled && (
            <button className="nextButton" onClick={() => handleNext("drilling", "dipSampleRaw")}>Next</button>
          )}
        </div>
      )}

      {sections.dipSampleRaw.visible && (
        <div className="section dip-sample-raw">
          <h2>Dip Sample Raw</h2>
          <label>
            Lab:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.dipSampleRaw.data.lab}
              onChange={(e) => handleInputChange("dipSampleRaw", "lab", e.target.value)}
            />
          </label>
          <label>
            Refree:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.dipSampleRaw.data.refree}
              onChange={(e) => handleInputChange("dipSampleRaw", "refree", e.target.value)}
            />
          </label>
          {sections.dipSampleRaw.filled && (
            <button className="nextButton" onClick={() => handleNext("dipSampleRaw", "dip999")}>Next</button>
          )}
        </div>
      )}

      {sections.dip999.visible && (
        <div className="section dip-999">
          <h2>Dip 999</h2>
          <label>
            Lab:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.dip999.data.lab}
              onChange={(e) => handleInputChange("dip999", "lab", e.target.value)}
            />
          </label>
          <label>
            Refree:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.dip999.data.refree}
              onChange={(e) => handleInputChange("dip999", "refree", e.target.value)}
            />
          </label>
          {sections.dip999.filled && (
            <button className="nextButton" onClick={() => handleNext("dip999", "convergenceSilver")}>Next</button>
          )}
        </div>
      )}

      {sections.convergenceSilver.visible && (
        <div className="section convergence-silver">
          <h2>Silver Weight (In Gms)</h2>
          <label>
            Weight:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.convergenceSilver.data.weight}
              onChange={(e) => handleInputChange("convergenceSilver", "weight", e.target.value)}
            />
          </label>
          {sections.convergenceSilver.filled && (
            <button className="nextButton" onClick={() => handleNext("convergenceSilver", "dipSample995")}>Next</button>
          )}
        </div>
      )}

      {sections.dipSample995.visible && (
        <div className="section dip-sample-995">
          <h2>Dip Sample 995</h2>
          <label>
            Lab:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.dipSample995.data.lab}
              onChange={(e) => handleInputChange("dipSample995", "lab", e.target.value)}
            />
          </label>
          <label>
            Refree:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.dipSample995.data.refree}
              onChange={(e) => handleInputChange("dipSample995", "refree", e.target.value)}
            />
          </label>
          {sections.dipSample995.filled && (
            <button className="nextButton" onClick={() => handleNext("dipSample995", "dispatch")}>Next</button>
          )}
        </div>
      )}

      {sections.dispatch.visible && (
        <div className="section dispatch">
          <h2>Dispatch</h2>
          <div className="radio-group">
            Bar type:
            <label>
              <input
                type="radio"
                name="bar-type"
                value="1kg"
                checked={sections.dispatch.data.barType === "1kg"}
                onChange={(e) => handleInputChange("dispatch", "barType", e.target.value)}
              /> 1kg
            </label>
            <label>
              <input
                type="radio"
                name="bar-type"
                value="100gm"
                checked={sections.dispatch.data.barType === "100gm"}
                onChange={(e) => handleInputChange("dispatch", "barType", e.target.value)}
              /> 100gm
            </label>
          </div>
          <label>
            Quantity:
            <input
              type="number"
              className="input-number"
              value={sections.dispatch.data.quantity}
              onChange={(e) => handleInputChange("dispatch", "quantity", e.target.value)}
            />
          </label>
          <div className="radio-group">
            Bar Customer:
            <label>
              <input
                type="radio"
                name="bar-customer"
                value="RAC"
                checked={sections.dispatch.data.barCustomer === "RAC"}
                onChange={(e) => handleInputChange("dispatch", "barCustomer", e.target.value)}
              /> RAC
            </label>
            <label>
              <input
                type="radio"
                name="bar-customer"
                value="GCK"
                checked={sections.dispatch.data.barCustomer === "GCK"}
                onChange={(e) => handleInputChange("dispatch", "barCustomer", e.target.value)}
              /> GCK
            </label>
          </div>
          <label>
            Bar Number:
            <input
              type="text"
              className="input-text"
              value={sections.dispatch.data.barNumber}
              onChange={(e) => handleInputChange("dispatch", "barNumber", e.target.value)}
            />
          </label>
          {sections.dispatch.filled && (
            <button className="nextButton" onClick={() => handleNext("dispatch", "recovery")}>Next</button>
          )}
        </div>
      )}

      {sections.recovery.visible && (
        <div className="section recovery">
          <h2>Recovery</h2>
          <label>
            Weight:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.recovery.data.weight}
              onChange={(e) => handleInputChange("recovery", "weight", e.target.value)}
            />
          </label>
          <label>
            Purity:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.recovery.data.purity}
              onChange={(e) => handleInputChange("recovery", "purity", e.target.value)}
            />
          </label>
          <label>
            Au Fine:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.recovery.data.auFine}
              onChange={(e) => handleInputChange("recovery", "auFine", e.target.value)}
            />
          </label>
          <label>
            Ag Fine:
            <input
              type="number"
              step="0.01"
              className="input-decimal"
              value={sections.recovery.data.agFine}
              onChange={(e) => handleInputChange("recovery", "agFine", e.target.value)}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Dore;
