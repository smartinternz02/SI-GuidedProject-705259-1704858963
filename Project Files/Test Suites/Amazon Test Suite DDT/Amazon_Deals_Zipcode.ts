<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Amazon_Deals_Zipcode</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>4b438fa9-c8be-494f-a1b6-829765c1d336</testSuiteGuid>
   <testCaseLink>
      <guid>9d976e0a-cd1a-41d6-b31c-2bee1635497d</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/TC_Amazon_Zip_003</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>42285af7-c407-4852-9dc2-862a4026e0f6</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon deals</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>64eb51e6-5e67-45c0-a1a2-6bc131444740</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon_Zip</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>64eb51e6-5e67-45c0-a1a2-6bc131444740</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>zipcode</value>
         <variableId>403725fd-908d-4b51-8986-5959377e9e8b</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>144b33b8-1a64-4eda-bc34-9417a372d24b</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Data_Driven_Testing/TC_Amazon_TodaysDeals_005</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>1d48cbc9-cb35-4e03-94fd-6b236a1cfc16</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon_Zip</testDataId>
      </testDataLink>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b5752567-92e4-4790-a8f5-cf75d57c817a</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Data Driven Test data/Amazon deals</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>b5752567-92e4-4790-a8f5-cf75d57c817a</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>email</value>
         <variableId>052e77e7-7e9e-40b7-9f91-56cd52689f48</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>b5752567-92e4-4790-a8f5-cf75d57c817a</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>a79b971d-672d-4356-af33-510da47f2b26</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
